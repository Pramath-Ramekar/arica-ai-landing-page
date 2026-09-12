# Arica AI Security — Landing Page

Standalone landing page for Arica Tech's AI security testing offering.

- `index.html` — the page itself: hero, stats, receipts, research, offers, FAQ, CTA, footer.
- `hero-spline-widget.js` / `hero-spline-widget.css` — the hero's mounted React + `@splinetool/react-spline` 3D widget, built separately from a Vite/React/TypeScript/Tailwind/shadcn project and bundled as a standalone ES module.
- Remaining `.js` files — code-split chunks the Spline runtime loads on demand (physics, rendering effects, etc).

## Deploying

This is a static site — no build step required. Deploy the folder as-is to any static host (Vercel, Netlify, GitHub Pages, etc.), serving `index.html` at the root.

## Editing the hero widget

The hero's 3D scene and its copy live in a separate source project (not included in this repo) built with Vite. Rebuild it and copy the resulting `hero-spline-widget.js` / `.css` (and any new chunk files) into this folder to update the hero.
