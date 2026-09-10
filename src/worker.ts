export interface Env {
  ASSETS: {
    fetch: (request: Request) => Promise<Response>;
  };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // API endpoints (Optional Worker logic)
    if (url.pathname === '/api/daily-seed') {
      const today = new Date().toISOString().split('T')[0];
      return new Response(JSON.stringify({ date: today }), {
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=3600',
        },
      });
    }

    // Serve static assets from Vite build
    return env.ASSETS.fetch(request);
  },
};
