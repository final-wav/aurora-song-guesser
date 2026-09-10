export interface ScoreEntry {
  id: string;
  username: string;
  score: number;
  mode: 'daily' | 'match';
  difficulty?: 'easy' | 'medium' | 'hard' | 'expert' | 'brutal';
  unlockedDuration?: number;
  totalRoundsWon?: number;
  date?: string;
  timestamp: number;
}

export interface Env {
  ASSETS?: {
    fetch: (request: Request) => Promise<Response>;
  };
  LEADERBOARD_KV?: {
    get: (key: string, type?: 'text' | 'json') => Promise<any>;
    put: (key: string, value: string, options?: { expirationTtl?: number }) => Promise<void>;
  };
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Content-Type': 'application/json',
};

// Seeded initial scores for an active community feel
const DEFAULT_DAILY_SCORES: ScoreEntry[] = [
  { id: 'seed-1', username: 'Queendom_Warrior', score: 10000, mode: 'daily', unlockedDuration: 0.1, timestamp: Date.now() - 3600000 },
  { id: 'seed-2', username: 'BloodInTheWine', score: 10000, mode: 'daily', unlockedDuration: 0.5, timestamp: Date.now() - 7200000 },
  { id: 'seed-3', username: 'RunawayStar', score: 8000, mode: 'daily', unlockedDuration: 1.0, timestamp: Date.now() - 10800000 },
  { id: 'seed-4', username: 'TheSeed_96', score: 6000, mode: 'daily', unlockedDuration: 3.0, timestamp: Date.now() - 14400000 },
  { id: 'seed-5', username: 'CureForMe_Fan', score: 4000, mode: 'daily', unlockedDuration: 5.0, timestamp: Date.now() - 18000000 },
];

const DEFAULT_MATCH_SCORES: ScoreEntry[] = [
  { id: 'seed-m1', username: 'AuroraAksnes_Vibes', score: 48000, mode: 'match', difficulty: 'brutal', totalRoundsWon: 5, timestamp: Date.now() - 86400000 },
  { id: 'seed-m2', username: 'ChurchyardEcho', score: 44000, mode: 'match', difficulty: 'expert', totalRoundsWon: 5, timestamp: Date.now() - 172800000 },
  { id: 'seed-m3', username: 'ExistForLove', score: 40000, mode: 'match', difficulty: 'hard', totalRoundsWon: 5, timestamp: Date.now() - 259200000 },
  { id: 'seed-m4', username: 'GivingInToTheLove', score: 36000, mode: 'match', difficulty: 'medium', totalRoundsWon: 4, timestamp: Date.now() - 345600000 },
  { id: 'seed-m5', username: 'StarvationBeat', score: 32000, mode: 'match', difficulty: 'easy', totalRoundsWon: 4, timestamp: Date.now() - 432000000 },
];

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: CORS_HEADERS,
      });
    }

    // API: Get Leaderboard
    if (url.pathname === '/api/leaderboard' && request.method === 'GET') {
      try {
        const mode = url.searchParams.get('mode') || 'daily';
        const date = url.searchParams.get('date') || new Date().toISOString().split('T')[0];
        const difficulty = url.searchParams.get('difficulty') || 'all';

        const storageKey = mode === 'daily' ? `leaderboard:daily:${date}` : `leaderboard:match:${difficulty}`;

        let scores: ScoreEntry[] = [];
        if (env.LEADERBOARD_KV) {
          const cached = await env.LEADERBOARD_KV.get(storageKey, 'json');
          if (cached && Array.isArray(cached)) {
            scores = cached;
          }
        }

        // If no scores recorded yet, return default seeded scores
        if (scores.length === 0) {
          scores = mode === 'daily' ? DEFAULT_DAILY_SCORES : DEFAULT_MATCH_SCORES;
        }

        return new Response(JSON.stringify({
          success: true,
          mode,
          date,
          difficulty,
          count: scores.length,
          leaderboard: scores.slice(0, 50),
        }), {
          status: 200,
          headers: CORS_HEADERS,
        });
      } catch (err: any) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
          status: 500,
          headers: CORS_HEADERS,
        });
      }
    }

    // API: Submit Score
    if (url.pathname === '/api/score' && request.method === 'POST') {
      try {
        const body = await request.json() as Partial<ScoreEntry>;
        const rawUsername = (body.username || 'Anonymous Warrior').toString().trim();
        const username = rawUsername.replace(/[^\w\s-]/gi, '').slice(0, 20) || 'Anonymous Warrior';
        const score = Math.max(0, Math.min(50000, Number(body.score) || 0));
        const mode = body.mode === 'daily' ? 'daily' : 'match';
        const difficulty = body.difficulty || 'easy';
        const unlockedDuration = Number(body.unlockedDuration) || 0;
        const totalRoundsWon = Number(body.totalRoundsWon) || 0;
        const date = (body.date || new Date().toISOString().split('T')[0]).slice(0, 10);
        const timestamp = Date.now();

        const newEntry: ScoreEntry = {
          id: `score-${timestamp}-${Math.random().toString(36).slice(2, 7)}`,
          username,
          score,
          mode,
          difficulty,
          unlockedDuration,
          totalRoundsWon,
          date,
          timestamp,
        };

        const storageKey = mode === 'daily' ? `leaderboard:daily:${date}` : `leaderboard:match:${difficulty}`;

        let currentScores: ScoreEntry[] = [];
        if (env.LEADERBOARD_KV) {
          const cached = await env.LEADERBOARD_KV.get(storageKey, 'json');
          if (cached && Array.isArray(cached)) {
            currentScores = cached;
          }
        }

        if (currentScores.length === 0) {
          currentScores = mode === 'daily' ? [...DEFAULT_DAILY_SCORES] : [...DEFAULT_MATCH_SCORES];
        }

        // Add and sort scores
        currentScores.push(newEntry);
        currentScores.sort((a, b) => {
          if (b.score !== a.score) return b.score - a.score;
          // For equal score in daily, faster duration wins
          if (mode === 'daily' && a.unlockedDuration !== undefined && b.unlockedDuration !== undefined) {
            return a.unlockedDuration - b.unlockedDuration;
          }
          return a.timestamp - b.timestamp;
        });

        // Keep top 100
        const trimmed = currentScores.slice(0, 100);

        // Find user rank
        const rank = trimmed.findIndex(e => e.id === newEntry.id) + 1;

        if (env.LEADERBOARD_KV) {
          // Store with 30 days retention
          await env.LEADERBOARD_KV.put(storageKey, JSON.stringify(trimmed), { expirationTtl: 86400 * 30 });
        }

        return new Response(JSON.stringify({
          success: true,
          rank: rank > 0 ? rank : null,
          entry: newEntry,
          leaderboard: trimmed.slice(0, 50),
        }), {
          status: 200,
          headers: CORS_HEADERS,
        });
      } catch (err: any) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
          status: 400,
          headers: CORS_HEADERS,
        });
      }
    }

    // Serve static frontend assets if available
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response('AURORA Song Guesser API Service Online', { status: 200 });
  },
};
