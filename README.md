# Personal portfolio

Personal portfolio site — built with React, Vite, and Tailwind CSS.

**Live:** [sebdemichelis.dev](https://sebdemichelis.dev)

---

## Tech Stack

| Layer | Tools |
|-------|-------|
| Framework | React 19 + Vite |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| i18n | react-i18next (IT / EN) |
| Testing | Vitest + Testing Library |
| Deploy | Vercel |
| Analytics | Vercel Speed Insights + Analytics |

## Design

**Font:** [Inter](https://rsms.me/inter/) — via Fontsource

**Colors:**

| Token | Hex | Role |
|-------|-----|------|
| `bg-base` | `#0A1628` | Page background |
| `bg-surface` | `#0D2137` | Cards, sidebar |
| `bg-elevated` | `#163352` | Elevated surfaces |
| `accent` | `#1DE9B6` | Highlights, active states |
| `accent-light` | `#4DFFD2` | Hover accents |
| `text-primary` | `#F0EAD6` | Body text |

**Inspiration:** [Brittany Chiang's portfolio](https://brittanychiang.com)

## Getting Started

```bash
npm install
npm run dev      # dev server at localhost:5173
npm run build    # production build
npm test         # run test suite
```

## Project Structure

```
src/
├── components/   # UI components (layout, sections, ui)
├── data/         # Content: projects, experience, skills
├── i18n/         # Translations (it.json, en.json)
├── hooks/        # Custom hooks
└── pages/        # Route-level pages
```

## Customization

| What | Where |
|------|-------|
| Projects | `src/data/projects.ts` |
| Experience | `src/data/experience.ts` |
| Skills | `src/data/skills.ts` |
| Copy (IT) | `src/i18n/it.json` |
| Copy (EN) | `src/i18n/en.json` |
| Colors | `src/index.css` |

## Using This as a Template

Feel free to fork this repo and adapt it for your own portfolio.
If you do, a credit or a star on the repo is appreciated — but not required.

Please don't deploy it as-is with my personal information.
