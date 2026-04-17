# Vietnam Direct 2026

Landing page for the Build Better Series factory sourcing trip, May 30 – June 5, 2026.

Built with Next.js 15 (App Router) for server-side rendering — crawlable by Google, Bing, ChatGPT, Claude, Perplexity, and other AI search agents.

## Stack

- Next.js 15 · React 19 · TypeScript
- Server Components (content pre-rendered in HTML)
- Metadata API + OpenGraph + Twitter Card
- JSON-LD structured data (Event, Organization, FAQPage)
- `app/robots.ts` + `app/sitemap.ts`
- AI crawlers explicitly allowed (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, CCBot, etc.)

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## SEO / AEO notes

- Update `SITE_URL` in `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts` to the production domain.
- Structured data covers the Event, hosting organizations, and an FAQ for answer-engine extraction.
- All factory data lives in `app/data/factories.ts`.
