# Deployment Map

This directory is the source root for the Flooencer agency website.

| Domain | Purpose | Vercel project | Source root |
| --- | --- | --- | --- |
| `agency.flooencer.com` | Agency website | `agency-website` | `.` |

The agency site is the codebase with the `/discuss-your-campaign` route and
campaign discussion CTAs.

`flooencer.com` and `www.flooencer.com` belong to the newly-created main
marketing website, not this agency codebase.

Before deploying from this directory, run:

```bash
npm run check:vercel-project
npm run lint
npm run build
```
