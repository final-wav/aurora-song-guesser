export interface ScoreEntry {
  id: string;
  playerId?: string;
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
  'Cache-Control': 'no-store, no-cache, must-revalidate',
};


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
            scores = cached.filter((s: ScoreEntry) => s && !s.id?.startsWith('seed-'));
          }
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
          leaderboard: filteredScores,
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

    // API: Submit Score & Rename
    if (url.pathname === '/api/score' && request.method === 'POST') {
      try {
        const body = await request.json() as any;

        // Action: Rename existing player's scores
        if (body.action === 'rename') {
          const playerId = (body.playerId || '').toString().trim();
          const rawUsername = (body.username || '').toString().trim();
          const newUsername = rawUsername.replace(/[^\w\s-]/gi, '').slice(0, 20) || 'Anonymous Warrior';
          const targetDate = (body.date || new Date().toISOString().split('T')[0]).slice(0, 10);
          const previousEntryId = (body.previousEntryId || '').toString().trim();

          if (env.LEADERBOARD_KV && (playerId || previousEntryId)) {
            const keysToUpdate = [`leaderboard:daily:${targetDate}`, `leaderboard:match`];
            for (const key of keysToUpdate) {
              const cached = await env.LEADERBOARD_KV.get(key, 'json');
              if (Array.isArray(cached) && cached.length > 0) {
                let modified = false;
                cached.forEach((e: ScoreEntry) => {
                  if ((playerId && e.playerId === playerId) || (previousEntryId && e.id === previousEntryId)) {
                    e.username = newUsername;
                    modified = true;
                  }
                });
                if (modified) {
                  await env.LEADERBOARD_KV.put(key, JSON.stringify(cached), { expirationTtl: 86400 * 30 });
                }
              }
            }
          }

          return new Response(JSON.stringify({ success: true, username: newUsername }), {
            status: 200,
            headers: CORS_HEADERS,
          });
        }

        // Action: Normal Score Submission
        const playerId = (body.playerId || '').toString().trim();
        const rawUsername = (body.username || 'Anonymous Warrior').toString().trim();
        const username = rawUsername.replace(/[^\w\s-]/gi, '').slice(0, 20) || 'Anonymous Warrior';
        const isAnonymous = username.toLowerCase() === 'anonymous warrior';
        const score = Math.max(0, Math.min(50000, Number(body.score) || 0));
        const mode = body.mode === 'daily' ? 'daily' : 'match';
        const difficulty = body.difficulty || 'easy';
        const unlockedDuration = Number(body.unlockedDuration) || 0;
        const totalRoundsWon = Number(body.totalRoundsWon) || 0;
        const date = (body.date || new Date().toISOString().split('T')[0]).slice(0, 10);
        const timestamp = Date.now();

        const newEntry: ScoreEntry = {
          id: `score-${timestamp}-${Math.random().toString(36).slice(2, 7)}`,
          playerId: playerId || undefined,
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
          if (Array.isArray(cached)) {
            currentScores = cached.filter((s: ScoreEntry) => s && !s.id?.startsWith('seed-'));
          }
        }

        // Deduplication rules:
        // 1. If this device has a playerId, replace this player's own previous score if newScore >= oldScore
        // 2. If a custom username was used (not Anonymous Warrior), replace only if newScore >= oldScore
        // 3. Different Anonymous Warriors must NEVER overwrite each other!
        currentScores = currentScores.filter(e => {
          if (playerId && e.playerId && e.playerId === playerId) {
            return e.score > score; // Keep existing only if it was strictly higher
          }
          if (!isAnonymous && e.username.toLowerCase() === username.toLowerCase()) {
            return e.score > score; // Keep existing named user only if strictly higher
          }
          return true; // Keep all other entries (including other anonymous players)
        });

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

        // Keep top 1000
        const trimmed = currentScores.slice(0, 1000);

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
          leaderboard: trimmed,
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
