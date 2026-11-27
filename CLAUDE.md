# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server (localhost:4321)
- `npm run build` — Build to `./dist/`
- `npm run preview` — Preview production build locally
- `npx astro <cmd>` — Run Astro CLI directly (e.g. `npx astro check` for type diagnostics)

No linter, formatter, or test runner is configured.

## Stack

- **Astro 4** static site generator (no client-side JS frameworks)
- **Tailwind CSS 3** via `@astrojs/tailwind` integration
- TypeScript in strict mode

## Architecture

Multi-page personal portfolio. Every page uses `src/layouts/BaseLayout.astro`, which shows the left menu (`src/components/Sidebar.astro`) and the page content on the right.

```
BaseLayout (left Sidebar + right content)
  ├── /                     src/pages/index.astro (bio + project rows)
  ├── /projects/<slug>      src/pages/projects/[slug].astro
  ├── /experience/<slug>    src/pages/experience/[slug].astro
  ├── /poker                src/pages/poker.astro
  └── /about                src/pages/about.astro (LinkedIn, GitHub, resume links)
```

Content lives in data files:
- `src/data/projects.ts` — every project (menu, home rows, project pages).
- `src/data/experience.ts` — every company and its roles.
Add or edit an entry there; the menu and pages update by themselves.

## Tailwind Theme

"Ledger × Charcoal" look. Custom tokens in `tailwind.config.mjs`:
- **charcoal** `#141716` background, **ink** `#ECEAE3` text, **muted** `#A3ABA6` secondary text
- **rule** `#2E3532` / **rule-strong** `#4A524E` lines
- **felt** `#5FBF8A` poker-green accent — use sparingly (`//` marks, live status, hover)
- **font**: JetBrains Mono everywhere (loaded via Google Fonts in BaseLayout)

No cards, rounded corners, badges or icons.

## Static Assets

Images live in `public/assets/`. Astro serves `public/` at the site root (e.g. `public/assets/foo.jpg` → `/assets/foo.jpg`).
