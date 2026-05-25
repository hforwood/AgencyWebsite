# Flooencer Brand Guidelines

Source: https://agency.flooencer.com/
Version: v2025

Use this as the local source of truth for the Agency Website project.

## Brand Position

Flooencer is the B2B influencer marketing agency for SaaS, AI, and Tech companies. The website should feel bold, direct, credible, human, and focused on campaign outcomes that connect to pipeline.

Core message:
- Flooencer runs creator campaigns for B2B SaaS and technology companies.
- The managed service covers creator sourcing, contracts, briefs, content, and reporting.
- The work should be framed around pipeline and business results, not generic awareness.

## Color System

Core palette:
- Purple: `#6513D1` for CTAs, links, and active states.
- Deep Purple: `#280752` for hero sections and dark backgrounds.
- Near Black: `#0f0f0f` for body text and dark buttons.
- White: `#ffffff` for backgrounds and card fills.
- Off White: `#efefef` for muted section backgrounds.

Accent palette:
- Green: `#2FC12F` for success and positive metrics.
- Amber: `#FFB717` for warnings, highlights, and labels.
- Red: `#D31A35` for errors and bold alert accents.
- Lavender: `#cd9cec` for soft fills and hover backgrounds.
- Mid Purple: `#7755FA` for secondary interactive states.

Primary gradient:

```css
linear-gradient(135deg, #280752 0%, #6513D1 100%)
```

## Typography

- Headings and UI: `Degular Display`, bold.
- Body copy: `DM Sans`, regular.
- H1: 64-96px, bold, tight tracking.
- H2: 48-56px, bold, tight tracking.
- Large body: 18-20px, line-height around 1.5.
- Body: 16px, line-height around 1.6.
- Labels and tags: DM Sans bold, 12px, uppercase, `0.06em` letter spacing.

Fallback stack:

```css
--font-display: "Degular Display", "Helvetica Neue", sans-serif;
--font-body: "DM Sans", "Helvetica Neue", sans-serif;
```

## Logo Rules

- Approved logo families are full wordmark and icon-only, in gradient, purple, white, and black variants.
- Always include the period in `Flooencer.` when using the wordmark.
- Minimum sizes: 120px wide for wordmark, 32px wide for icon.
- Clear space should match the height of the `F`.
- Use the white variant on dark or gradient backgrounds.
- Do not stretch, rotate, skew, or recolor the logo outside approved variants.

## Components

Buttons:
- Primary buttons use the purple gradient, white text, DM Sans bold, 8px radius, and generous horizontal padding.
- Secondary buttons are transparent with a purple border and purple text.
- CTAs should be short and direct: `See our work`, `Book a call`, `Get the deck`, `Start a campaign`.

Pills and tags:
- DM Sans bold, uppercase, 12px, `0.06em` letter spacing.
- Use soft lavender or pale purple fills with purple text and subtle purple border.

Cards:
- Keep cards simple and proof-led.
- Use compact labels, concise headings, and concrete metrics where available.
- Avoid decorative card-heavy layouts that bury the main campaign story.

## Spacing And Layout

Use an 8px base grid.

Spacing tokens:
- `xs`: 4px
- `sm`: 8px
- `md`: 16px
- `lg`: 24px
- `xl`: 32px
- `2xl`: 48px
- `3xl`: 64px
- `4xl`: 96px

Layout defaults:
- Max width: 1200px.
- Desktop page padding: 64px.
- Mobile page padding: 24px.
- Section padding: 80px vertical, 64px horizontal on desktop.
- Card padding: roughly 28px 32px.
- Border radii: 8px small, 12px medium, 16px large.

## Imagery

Use imagery that feels real, professional, and editorial.

Use:
- Real creators in natural work environments.
- SaaS product UI in clean device mockups.
- High-contrast editorial photography.
- Deep purple or near-black tones, with the brand gradient as an overlay where useful.
- Diverse, professional, human talent.

Avoid:
- Generic handshake, lightbulb, whiteboard, or team-collaboration stock.
- Oversaturated or heavily filtered imagery.
- Visible competitor logos.
- Uncanny AI-generated faces.

AI image prompt prefix:

```text
Clean minimal B2B SaaS aesthetic, professional but human, authentic creator economy context, deep purple and near-black tones, soft studio lighting or natural window light, no text in image, editorial quality, high contrast, real workplace setting.
```

## Voice And Tone

The copy should be:
- Bold, not arrogant.
- Direct, not cold.
- Proof-led, not hype-led.
- Human, not generic enterprise marketing.

Use these terms:
- Creators, not influencers.
- Campaign, not project.
- Pipeline, not leads.
- Partner, not vendor.
- Brief, not scope of work.

Avoid:
- `leverage` as a verb.
- `synergy`, `ecosystem`, `holistic`.
- `Exciting to announce...`
- `In today's digital landscape...`
- `comprehensive solution`.
- `delve into`.

