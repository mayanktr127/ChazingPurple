# Project Details — DREAMDAY Wedding Studio

## Overview
A single-page marketing site for a fictional wedding planning studio, "DREAMDAY".
It combines the elegant, airy layout of the wedding reference design with the purple
gradient theme carried over from the earlier concept.

## Stack
- TanStack Start v1 (React 19, file-based routing)
- Vite 7
- Tailwind CSS v4 (tokens in `src/styles.css`)
- shadcn/ui components

## Structure
| Path | Purpose |
| --- | --- |
| `src/routes/__root.tsx` | Root layout, font `<link>` tags, global head metadata |
| `src/routes/index.tsx` | The full DREAMDAY landing page |
| `src/styles.css` | Design tokens, gradients, utility classes |
| `src/assets/` | Wedding hero + gallery imagery |

## Page sections
1. **Navigation** — sticky bar, gradient DREAMDAY wordmark, minimal links, CTA.
2. **Hero** — full-bleed couple-in-field image, headline "Turning your wedding dreams into ultimate reality", Get Started button.
3. **Stats strip** — social proof (e.g. 480+ weddings designed).
4. **About** — studio introduction copy.
5. **Services** — Full Planning, Design & Styling, Day-of Coordination.
6. **Selected celebrations** — gallery of past weddings with hover interaction.
7. **Book a consultation** — closing CTA.
8. **Footer** — links and credits.

## Conventions
- All colors come from semantic design tokens; no hardcoded color utilities.
- Serif display font for headings, sans-serif for everything else.
- Responsive-first: mobile stacks to single column, desktop uses multi-column grids.
- Each route defines its own `head()` with unique title/description and OG tags.

---

# Appendix — design.md

# Design System — DREAMDAY

## Visual direction
Elegant, airy wedding-studio aesthetic built on a purple/violet gradient theme.
Generous whitespace, soft shadows, large serif headlines, understated sans-serif body copy.

## Typography
| Role | Font | Usage |
| --- | --- | --- |
| Display | Cormorant Garamond (serif) | Headlines, logo wordmark, section titles |
| Body | DM Sans (sans-serif) | Paragraphs, nav, buttons, labels, captions |

Loaded via `<link>` tags in `src/routes/__root.tsx`, exposed as `--font-display` / `--font-body`.

## Color tokens (oklch, defined in `src/styles.css`)
| Token | Light value | Purpose |
| --- | --- | --- |
| `--background` | `oklch(0.99 0.005 300)` | Page background |
| `--foreground` | `oklch(0.22 0.02 285)` | Primary text |
| `--primary` | `oklch(0.55 0.25 300)` | Purple brand color |
| `--primary-glow` | `oklch(0.72 0.18 320)` | Gradient highlight / violet accent |
| `--ink` | `oklch(0.2 0.015 285)` | Dark sections, footer |
| `--secondary` | `oklch(0.96 0.02 310)` | Soft tinted surfaces |
| `--muted-foreground` | `oklch(0.52 0.03 290)` | Secondary text |
| `--accent` | `oklch(0.94 0.05 320)` | Chips, badges, subtle highlights |
| `--border` / `--input` | `oklch(0.92 0.015 300)` | Hairlines, field outlines |

Rule: never hardcode colors in components — always use semantic tokens.

## Gradients & effects
- `--gradient-primary`: `linear-gradient(135deg, primary, primary-glow)` — buttons, wordmark (`text-gradient`).
- `--gradient-aura`: layered radial glows — ambient background (`bg-aura`).
- Soft, low-opacity purple shadows for cards; no harsh drop shadows.

## Shape & spacing
- Base radius `--radius: 1rem`, scaling up to `--radius-4xl` for hero panels and image cards.
- Section rhythm: large vertical padding, max content width centered, 12-column-feel grids.

## Components
- **Nav** — sticky, transparent over hero, wordmark left, minimal links, pill CTA right.
- **Hero** — full-bleed image, dark overlay, serif headline, "Get Started" pill button.
- **Stats strip** — inline social-proof numbers with serif figures.
- **Services grid** — three cards, icon + title + description.
- **Gallery** — image cards with group-hover zoom and caption overlay.
- **CTA + footer** — dark ink background, gradient accent, minimal links.

## Imagery
Warm, natural wedding photography with purple/violet color grading, stored in `src/assets/`.
