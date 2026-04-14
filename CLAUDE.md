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

Single-page personal portfolio. All content lives on `src/pages/index.astro`, which composes section components:

```
BaseLayout (src/layouts/BaseLayout.astro)
  └── index.astro
        ├── Navbar
        ├── Hero
        ├── About
        ├── Experience
        ├── Projects
        ├── Skills
        └── Footer
```

Experience, Projects, and Skills components define their data as inline JS arrays and render with `.map()`. To update content, edit the data arrays at the top of each component file.

## Tailwind Theme

Custom tokens in `tailwind.config.mjs`:
- **accent**: `#FFCC00` (gold)
- **surface**: `#1e293b` (card backgrounds)
- **font**: Inter (loaded via Google Fonts in BaseLayout)

The site uses a dark theme (slate-900/slate-800 backgrounds) with the gold accent throughout.

## Static Assets

Images live in `public/assets/`. Astro serves `public/` at the site root (e.g. `public/assets/foo.jpg` → `/assets/foo.jpg`).
