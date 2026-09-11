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
];

const DEFAULT_MATCH_SCORES: ScoreEntry[] = [
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

        const storageKey = mode === 'daily' ? `leaderboard:daily:${date}` : `leaderboard:match`;

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

        // Filter by difficulty if specifically requested (and not 'all')
        let filteredScores = scores;
        if (difficulty && difficulty !== 'all') {
          filteredScores = scores.filter(s => s.difficulty === difficulty);
        }

        return new Response(JSON.stringify({
          success: true,
          mode,
          date,
          difficulty,
          count: filteredScores.length,
          leaderboard: filteredScores.slice(0, 50),
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

        const storageKey = mode === 'daily' ? `leaderboard:daily:${date}` : `leaderboard:match`;

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

        // Filter out previous lower score from same user if existing
        currentScores = currentScores.filter(e => !(e.username.toLowerCase() === username.toLowerCase() && e.score <= score));

        // Add and sort scores
        currentScores.push(newEntry);
        currentScores.sort((a, b) => {
          if (b.score !== a.score) return b.score - a.score;
          // For equal score in daily, faster duration wins
          if (mode === 'daily' && a.unlockedDuration !== undefined && b.unlockedDuration !== undefined) {
            return a.unlockedDuration - b.unlockedDuration;
          }
          return b.timestamp - a.timestamp;
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
