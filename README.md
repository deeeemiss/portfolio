# Sebastiano Demichelis — Portfolio

Portfolio personale. Stack: React + Vite + TypeScript + Tailwind CSS + Framer Motion.

## Setup

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # build di produzione in dist/
npm test          # test
```

## Aggiungere un progetto

Aprire `src/data/projects.ts` e aggiungere un oggetto all'array `projects`:

```ts
{
  id: 'mio-progetto',          // stringa unica, senza spazi
  title: 'Nome Progetto',
  description: 'Descrizione in italiano.',
  descriptionEn: 'English description.',  // opzionale
  category: 'dev',             // 'dev' | 'creative'
  tech: ['React', 'Node.js'],  // opzionale, solo per dev
  image: '/projects/nome.jpg', // opzionale, metti l'immagine in /public/projects/
  link: 'https://...',         // opzionale
  featured: true,              // opzionale
}
```

## Modificare i testi

- Testi in italiano: `src/i18n/it.json`
- Testi in inglese: `src/i18n/en.json`
- Bio: chiavi `about.bio1` e `about.bio2`

## Modificare le skill

Aprire `src/data/skills.ts`:
- `codeSkills` → tab "Code"
- `creativeSkills` → tab "Creative"

## Aggiungere immagini progetti

1. Mettere l'immagine in `public/projects/nome.jpg`
2. Nel progetto in `projects.ts`: `image: '/projects/nome.jpg'`

## Deploy su Vercel

1. Push su GitHub
2. Importare il repo su [vercel.com](https://vercel.com)
3. Framework preset: **Vite** (rilevato automaticamente)
4. Deploy automatico ad ogni push su `main`
