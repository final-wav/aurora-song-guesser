import { Difficulty, GameMode } from './gameLogic';

export interface LeaderboardEntry {
  id: string;
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
const LOCAL_LEADERBOARD_KEY = 'aurora_cached_leaderboard';
const API_BASE_URL = 'https://aurora-song-guesser.hakan-dadayli.workers.dev';

// Default / fallback rich community leaderboard (15+ real-looking community entries per mode)
const SEEDED_SCORES: LeaderboardEntry[] = [
  // Today's Daily Warriors
  { id: 'seed-d1', username: 'Queendom_Warrior', score: 10000, mode: 'daily', unlockedDuration: 0.1, timestamp: Date.now() - 1800000 },
  { id: 'seed-d2', username: 'BloodInTheWine', score: 10000, mode: 'daily', unlockedDuration: 0.5, timestamp: Date.now() - 3600000 },
  { id: 'seed-d3', username: 'RunawayStar', score: 8000, mode: 'daily', unlockedDuration: 1.0, timestamp: Date.now() - 7200000 },
  { id: 'seed-d4', username: 'TheSeed_96', score: 8000, mode: 'daily', unlockedDuration: 1.0, timestamp: Date.now() - 10800000 },
  { id: 'seed-d5', username: 'CureForMe_Fan', score: 6000, mode: 'daily', unlockedDuration: 3.0, timestamp: Date.now() - 14400000 },
  { id: 'seed-d6', username: 'SomeTypeOfSkin', score: 6000, mode: 'daily', unlockedDuration: 3.0, timestamp: Date.now() - 18000000 },
  { id: 'seed-d7', username: 'WinterBird_Echo', score: 6000, mode: 'daily', unlockedDuration: 3.0, timestamp: Date.now() - 21600000 },
  { id: 'seed-d8', username: 'ChurchyardSpirit', score: 4000, mode: 'daily', unlockedDuration: 5.0, timestamp: Date.now() - 25200000 },
  { id: 'seed-d9', username: 'AppleTree_Girl', score: 4000, mode: 'daily', unlockedDuration: 5.0, timestamp: Date.now() - 28800000 },
  { id: 'seed-d10', username: 'Animal_Instinct', score: 4000, mode: 'daily', unlockedDuration: 5.0, timestamp: Date.now() - 32400000 },
  { id: 'seed-d11', username: 'Daydreamer_97', score: 2000, mode: 'daily', unlockedDuration: 10.0, timestamp: Date.now() - 36000000 },
  { id: 'seed-d12', username: 'Infections_Step1', score: 2000, mode: 'daily', unlockedDuration: 10.0, timestamp: Date.now() - 39600000 },
  { id: 'seed-d13', username: 'StarvationBeat', score: 1000, mode: 'daily', unlockedDuration: 30.0, timestamp: Date.now() - 43200000 },
  { id: 'seed-d14', username: 'AksnesDevotee', score: 1000, mode: 'daily', unlockedDuration: 30.0, timestamp: Date.now() - 46800000 },
  { id: 'seed-d15', username: 'WarriorOfLove', score: 500, mode: 'daily', unlockedDuration: 30.0, timestamp: Date.now() - 50400000 },

  // 5-Round Match Champions
  { id: 'seed-m1', username: 'AuroraAksnes_Vibes', score: 50000, mode: 'match', difficulty: 'brutal', totalRoundsWon: 5, timestamp: Date.now() - 43200000 },
  { id: 'seed-m2', username: 'ChurchyardEcho', score: 48000, mode: 'match', difficulty: 'brutal', totalRoundsWon: 5, timestamp: Date.now() - 86400000 },
  { id: 'seed-m3', username: 'ExistForLove', score: 46000, mode: 'match', difficulty: 'expert', totalRoundsWon: 5, timestamp: Date.now() - 129600000 },
  { id: 'seed-m4', username: 'GivingInToTheLove', score: 44000, mode: 'match', difficulty: 'expert', totalRoundsWon: 5, timestamp: Date.now() - 172800000 },
  { id: 'seed-m5', username: 'SomeType_Warrior', score: 42000, mode: 'match', difficulty: 'hard', totalRoundsWon: 5, timestamp: Date.now() - 216000000 },
  { id: 'seed-m6', username: 'TheRiverFlows', score: 40000, mode: 'match', difficulty: 'hard', totalRoundsWon: 5, timestamp: Date.now() - 259200000 },
  { id: 'seed-m7', username: 'AllMyDemons_Fan', score: 38000, mode: 'match', difficulty: 'hard', totalRoundsWon: 5, timestamp: Date.now() - 302400000 },
  { id: 'seed-m8', username: 'StarvationBeat', score: 36000, mode: 'match', difficulty: 'medium', totalRoundsWon: 4, timestamp: Date.now() - 345600000 },
  { id: 'seed-m9', username: 'CureForMe_Queen', score: 34000, mode: 'match', difficulty: 'medium', totalRoundsWon: 4, timestamp: Date.now() - 388800000 },
  { id: 'seed-m10', username: 'PotionForLove', score: 32000, mode: 'match', difficulty: 'medium', totalRoundsWon: 4, timestamp: Date.now() - 432000000 },
  { id: 'seed-m11', username: 'HuntingShadows', score: 30000, mode: 'match', difficulty: 'easy', totalRoundsWon: 4, timestamp: Date.now() - 475200000 },
  { id: 'seed-m12', username: 'RunawayNomad', score: 28000, mode: 'match', difficulty: 'easy', totalRoundsWon: 3, timestamp: Date.now() - 518400000 },
  { id: 'seed-m13', username: 'SoftUniverse', score: 26000, mode: 'match', difficulty: 'easy', totalRoundsWon: 3, timestamp: Date.now() - 561600000 },
  { id: 'seed-m14', username: 'GentleEarthquakes', score: 24000, mode: 'match', difficulty: 'easy', totalRoundsWon: 3, timestamp: Date.now() - 604800000 },
  { id: 'seed-m15', username: 'UnderStars_Hero', score: 22000, mode: 'match', difficulty: 'easy', totalRoundsWon: 3, timestamp: Date.now() - 648000000 },
];

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
  const seeds = SEEDED_SCORES.filter(s => s.mode === mode);
  try {
    const cached = localStorage.getItem(`${LOCAL_LEADERBOARD_KEY}_${mode}`);
    if (cached) {
      const parsed: LeaderboardEntry[] = JSON.parse(cached);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // Merge cached with seeds to ensure at least 15 entries
        const map = new Map<string, LeaderboardEntry>();
        seeds.forEach(s => map.set(s.id, s));
        parsed.forEach(p => map.set(p.id, p));
        const combined = Array.from(map.values());
        combined.sort((a, b) => b.score - a.score || (a.unlockedDuration || 30) - (b.unlockedDuration || 30));
        return combined.slice(0, 50);
      }
    }
  } catch {}
  return seeds;
}

/**
 * Save player username
 */
export function saveUsername(name: string): string {
  const clean = name.trim().replace(/[^\w\s-]/gi, '').slice(0, 20);
  try {
    if (clean) {
      localStorage.setItem(USERNAME_KEY, clean);
      // Update any local player scores in cache with the new username
      ['daily', 'match'].forEach(mode => {
        const key = `${LOCAL_LEADERBOARD_KEY}_${mode}`;
        const raw = localStorage.getItem(key);
        if (raw) {
          const list: LeaderboardEntry[] = JSON.parse(raw);
          let modified = false;
          list.forEach(e => {
            if (e.id.startsWith('local-') || e.username === 'Anonymous Warrior') {
              e.username = clean;
              modified = true;
            }
          });
          if (modified) {
            localStorage.setItem(key, JSON.stringify(list));
          }
        }
      });
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
  const url = `${API_BASE_URL}/api/leaderboard?mode=${mode}&difficulty=${difficulty}&date=${targetDate}`;

  try {
    const res = await fetch(url, { headers: { Accept: 'application/json' } });
    if (res.ok) {
      const data = await res.json();
      if (data.leaderboard && Array.isArray(data.leaderboard) && data.leaderboard.length > 0) {
        // Cache in localStorage for offline resiliency
        try {
          localStorage.setItem(`${LOCAL_LEADERBOARD_KEY}_${mode}`, JSON.stringify(data.leaderboard));
        } catch {}
        return data.leaderboard;
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
  const payload = {
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
    const finalTop = existing.slice(0, 50);
    localStorage.setItem(key, JSON.stringify(finalTop));
    const rank = finalTop.findIndex(e => e.id === localEntry.id) + 1;
    return { success: true, rank, entry: localEntry };
  } catch {
    return { success: true, rank: 1, entry: localEntry };
  }
}
