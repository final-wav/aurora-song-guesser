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

// Default / fallback initial leaderboard if offline
const SEEDED_SCORES: LeaderboardEntry[] = [
  { id: 'seed-1', username: 'Queendom_Warrior', score: 10000, mode: 'daily', unlockedDuration: 0.1, timestamp: Date.now() - 3600000 },
  { id: 'seed-2', username: 'BloodInTheWine', score: 10000, mode: 'daily', unlockedDuration: 0.5, timestamp: Date.now() - 7200000 },
  { id: 'seed-3', username: 'RunawayStar', score: 8000, mode: 'daily', unlockedDuration: 1.0, timestamp: Date.now() - 10800000 },
  { id: 'seed-4', username: 'TheSeed_96', score: 6000, mode: 'daily', unlockedDuration: 3.0, timestamp: Date.now() - 14400000 },
  { id: 'seed-5', username: 'CureForMe_Fan', score: 4000, mode: 'daily', unlockedDuration: 5.0, timestamp: Date.now() - 18000000 },
  { id: 'seed-m1', username: 'AuroraAksnes_Vibes', score: 48000, mode: 'match', difficulty: 'brutal', totalRoundsWon: 5, timestamp: Date.now() - 86400000 },
  { id: 'seed-m2', username: 'ChurchyardEcho', score: 44000, mode: 'match', difficulty: 'expert', totalRoundsWon: 5, timestamp: Date.now() - 172800000 },
  { id: 'seed-m3', username: 'ExistForLove', score: 40000, mode: 'match', difficulty: 'hard', totalRoundsWon: 5, timestamp: Date.now() - 259200000 },
  { id: 'seed-m4', username: 'GivingInToTheLove', score: 36000, mode: 'match', difficulty: 'medium', totalRoundsWon: 4, timestamp: Date.now() - 345600000 },
  { id: 'seed-m5', username: 'StarvationBeat', score: 32000, mode: 'match', difficulty: 'easy', totalRoundsWon: 4, timestamp: Date.now() - 432000000 },
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
 * Save player username
 */
export function saveUsername(name: string): string {
  const clean = name.trim().replace(/[^\w\s-]/gi, '').slice(0, 20);
  try {
    if (clean) {
      localStorage.setItem(USERNAME_KEY, clean);
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
  const url = `/api/leaderboard?mode=${mode}&difficulty=${difficulty}&date=${targetDate}`;

  try {
    const res = await fetch(url, { headers: { Accept: 'application/json' } });
    if (res.ok) {
      const data = await res.json();
      if (data.leaderboard && Array.isArray(data.leaderboard)) {
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

  // Load from local storage or seeded scores
  try {
    const cached = localStorage.getItem(`${LOCAL_LEADERBOARD_KEY}_${mode}`);
    if (cached) {
      return JSON.parse(cached);
    }
  } catch {}

  return SEEDED_SCORES.filter(s => s.mode === mode);
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
    const res = await fetch('/api/score', {
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
    const existing: LeaderboardEntry[] = JSON.parse(localStorage.getItem(key) || '[]');
    existing.push(localEntry);
    existing.sort((a, b) => b.score - a.score);
    localStorage.setItem(key, JSON.stringify(existing.slice(0, 50)));
    const rank = existing.findIndex(e => e.id === localEntry.id) + 1;
    return { success: true, rank, entry: localEntry };
  } catch {
    return { success: true, rank: 1, entry: localEntry };
  }
}
