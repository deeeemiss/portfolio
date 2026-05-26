# sebastianodemichelis.dev

Personal portfolio site built with React, Vite, and Tailwind CSS.

**Live:** [portfolio-zeta-mauve-87.vercel.app](https://portfolio-zeta-mauve-87.vercel.app)

---

## Tech Stack

- **Framework:** React 19 + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **i18n:** react-i18next (IT / EN)
- **Testing:** Vitest + Testing Library
- **Deploy:** Vercel

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

## Inspiration

Design inspired by [Brittany Chiang's portfolio](https://brittanychiang.com).
