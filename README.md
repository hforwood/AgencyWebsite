# Flooencer Agency Website

Next.js site for Flooencer's B2B creator campaign agency website.

## Production Ownership

This repository is the agency website codebase. It contains the agency booking
flow at `/discuss-your-campaign`; pages in this codebase should use agency CTAs
that point there.

- Production domain: `agency.flooencer.com`
- Vercel project: `agency-website`
- Vercel root directory: `.`

Do not use this codebase as the canonical `flooencer.com` / `www.flooencer.com`
main marketing website.

The agency booking experience is served from `/`. The legacy
`/discuss-your-campaign` route remains available for direct links.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Brand System

Follow [BRAND_GUIDELINES.md](./BRAND_GUIDELINES.md) for color, typography, logo, component, imagery, and copy rules.

The site uses local Degular Display and DM Sans files from:

- `Degular Font Family/`
- `DM-Sans/`

## Useful Commands

```bash
npm run lint
npm run build
npm run check:vercel-project
```
