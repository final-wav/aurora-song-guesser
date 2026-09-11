import { Difficulty, GameMode } from './gameLogic';

export interface LeaderboardEntry {
  id: string;
  playerId?: string;
  username: string;
  score: number;
  mode: GameMode;
  difficulty?: Difficulty;
  unlockedDuration?: number;
  totalRoundsWon?: number;
  date?: string;
  timestamp: number;
}

const USERNAME_KEY = 'aurora_player_username';
const PLAYER_ID_KEY = 'aurora_player_uid';
const LAST_ENTRY_ID_KEY = 'aurora_last_score_id';
const LOCAL_LEADERBOARD_KEY = 'aurora_cached_leaderboard';
const API_BASE_URL = 'https://aurora-song-guesser.hakan-dadayli.workers.dev';

/**
 * Get or generate persistent unique player ID for this device
 */
export function getPlayerId(): string {
  try {
    let id = localStorage.getItem(PLAYER_ID_KEY);
    if (!id) {
      id = `usr_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
      localStorage.setItem(PLAYER_ID_KEY, id);
    }
    return id;
  } catch {
    return `usr_${Date.now()}`;
  }
}

/**
 * Get saved player username
 */
export function getSavedUsername(): string {
  try {
    return localStorage.getItem(USERNAME_KEY) || '';
  } catch {
    return '';
  }
}

/**
 * Synchronously get leaderboard entries for zero-latency tab switching
 */
export function getLeaderboardSync(mode: GameMode = 'daily'): LeaderboardEntry[] {
  try {
    const cached = localStorage.getItem(`${LOCAL_LEADERBOARD_KEY}_${mode}`);
    if (cached) {
      const parsed: LeaderboardEntry[] = JSON.parse(cached);
      if (Array.isArray(parsed)) {
        // Filter out any legacy dummy seed entries
        const realOnly = parsed.filter(p => p && !p.id?.startsWith('seed-'));
        realOnly.sort((a, b) => b.score - a.score || (a.unlockedDuration || 30) - (b.unlockedDuration || 30));
        return realOnly;
      }
    }
  } catch {}
  return [];
}

/**
 * Save player username and immediately sync name update with Cloudflare backend
 */
export function saveUsername(name: string): string {
  const clean = name.trim().replace(/[^\w\s-]/gi, '').slice(0, 20);
  try {
    if (clean) {
      localStorage.setItem(USERNAME_KEY, clean);
      const playerId = getPlayerId();
      const lastEntryId = localStorage.getItem(LAST_ENTRY_ID_KEY) || undefined;

      // Update any local player scores in cache with the new username
      ['daily', 'match'].forEach(mode => {
        const key = `${LOCAL_LEADERBOARD_KEY}_${mode}`;
        const raw = localStorage.getItem(key);
        if (raw) {
          const list: LeaderboardEntry[] = JSON.parse(raw);
          let modified = false;
          list.forEach(e => {
            if (e.playerId === playerId || (lastEntryId && e.id === lastEntryId) || e.id.startsWith('local-') || e.username === 'Anonymous Warrior') {
              e.username = clean;
              modified = true;
            }
          });
          if (modified) {
            localStorage.setItem(key, JSON.stringify(list));
          }
        }
      });

      // Synchronize rename with Cloudflare Worker live
      fetch(`${API_BASE_URL}/api/score`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'rename',
          playerId,
          previousEntryId: lastEntryId,
          username: clean,
          date: new Date().toISOString().split('T')[0],
        }),
      }).catch(() => {});
    } else {
      localStorage.removeItem(USERNAME_KEY);
    }
  } catch {}
  return clean;
}

/**
 * Fetch leaderboard from Cloudflare Worker or local cache
 */
export async function fetchLeaderboard(
  mode: GameMode = 'daily',
  difficulty: string = 'all',
  dateStr?: string
): Promise<LeaderboardEntry[]> {
  const targetDate = dateStr || new Date().toISOString().split('T')[0];
  const url = `${API_BASE_URL}/api/leaderboard?mode=${mode}&difficulty=${difficulty}&date=${targetDate}&_t=${Date.now()}`;

  try {
    const res = await fetch(url, { headers: { Accept: 'application/json' }, cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (data.leaderboard && Array.isArray(data.leaderboard)) {
        const realOnly = data.leaderboard.filter((e: LeaderboardEntry) => e && !e.id?.startsWith('seed-'));
        // Cache in localStorage for offline resiliency
        try {
          localStorage.setItem(`${LOCAL_LEADERBOARD_KEY}_${mode}`, JSON.stringify(realOnly));
        } catch {}
        return realOnly;
      }
    }
  } catch {
    // Graceful fallback to local cache
  }

  return getLeaderboardSync(mode);
}

/**
 * Submit score to Cloudflare Worker API
 */
export async function submitScore(params: {
  username?: string;
  score: number;
  mode: GameMode;
  difficulty?: Difficulty;
  unlockedDuration?: number;
  totalRoundsWon?: number;
}): Promise<{ success: boolean; rank?: number | null; entry?: LeaderboardEntry }> {
  const username = params.username || getSavedUsername() || 'Anonymous Warrior';
  const playerId = getPlayerId();
  const payload = {
    playerId,
    username,
    score: params.score,
    mode: params.mode,
    difficulty: params.difficulty,
    unlockedDuration: params.unlockedDuration,
    totalRoundsWon: params.totalRoundsWon,
    date: new Date().toISOString().split('T')[0],
  };

  try {
    const res = await fetch(`${API_BASE_URL}/api/score`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      const data = await res.json();
      if (data.entry?.id) {
        try {
          localStorage.setItem(LAST_ENTRY_ID_KEY, data.entry.id);
        } catch {}
      }
      return {
        success: true,
        rank: data.rank,
        entry: data.entry,
      };
    }
  } catch {
    // Failed network, store locally
  }

  // Fallback optimistic local record
  const localEntry: LeaderboardEntry = {
    id: `local-${Date.now()}`,
    playerId,
    username,
    score: params.score,
    mode: params.mode,
    difficulty: params.difficulty,
    unlockedDuration: params.unlockedDuration,
    totalRoundsWon: params.totalRoundsWon,
    date: payload.date,
    timestamp: Date.now(),
  };

  try {
    const key = `${LOCAL_LEADERBOARD_KEY}_${params.mode}`;
    const currentList = getLeaderboardSync(params.mode);
    // Filter out previous lower score from same user if existing
    const existing = currentList.filter(e => !(e.username.toLowerCase() === username.toLowerCase() && e.score <= params.score));
    existing.push(localEntry);
    existing.sort((a, b) => b.score - a.score || (a.unlockedDuration || 30) - (b.unlockedDuration || 30));
    localStorage.setItem(key, JSON.stringify(existing));
    const rank = existing.findIndex(e => e.id === localEntry.id) + 1;
    return { success: true, rank, entry: localEntry };
  } catch {
    return { success: true, rank: 1, entry: localEntry };
  }
}
