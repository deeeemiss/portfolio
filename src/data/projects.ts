export interface ProjectLinks {
  appStore?: string | null
  playStore?: string | null
  website?: string | null
  github?: string | null
}

export interface Project {
  id: string
  title: string
  year: number
  madeAt?: string
  description: string
  descriptionEn?: string
  tech: string[]
  icon?: string
  image?: string
  link?: string
  featured?: boolean
  platform?: 'mobile' | 'web'
  links?: ProjectLinks
}

export function isProjectReady(project: Project): boolean {
  if (project.link) return true
  if (project.links) return Object.values(project.links).some(v => typeof v === 'string')
  return false
}

export const projects: Project[] = [
  {
    id: 'lvgl-simulator',
    title: 'LVGL Simulator',
    year: 2025,
    description:
      'Simulatore LVGL nel browser: scrivi codice MicroPython o C/C++ e vedi il risultato in tempo reale su un display virtuale. MicroPython gira istantaneamente via WASM, senza installare nulla.',
    descriptionEn:
      'Web-based LVGL simulator: write MicroPython or C/C++ and see it run live on a virtual display. MicroPython runs instantly via WebAssembly — no setup needed.',
    tech: ['React', 'TypeScript', 'Vite', 'Monaco Editor', 'MicroPython', 'WebAssembly'],
    image: '/images/projects/lvgl-simulator.png',
    platform: 'web',
    featured: true,
    links: {
      website: 'https://lvglsim.dev',
      github: 'https://github.com/deeeemiss/lvgl-simulator',
    },
  },
  {
    id: 'foosball',
    title: 'FOOSBALL',
    year: 2024,
    description:
      'App per organizzare e gestire tornei di calcio balilla: iscrizioni, tabelloni e punteggi in tempo reale. Progetto personale costruito insieme a un collega, nato dalle partite in ufficio.',
    descriptionEn:
      'App for organizing and running foosball tournaments — sign-ups, brackets, and real-time scores. A personal project built together with a colleague, born out of office matches.',
    tech: ['React', 'Capacitor', 'Firebase'],
    featured: true,
    links: { appStore: null, playStore: null },
  },
  {
    id: 'lupus-app',
    title: 'Lupus in Tavola',
    year: 2023,
    description:
      'Companion app per Lupus in Tavola, pensata per chi fa da narratore: gestisce ruoli, turni e fasi di gioco da iOS e Android. Modalità multigiocatore in sviluppo.',
    descriptionEn:
      'Companion app for the party game Werewolf (Lupus in Tavola), built for whoever runs the game: manages roles, turns, and game phases on iOS and Android. Multiplayer mode in development.',
    tech: ['React', 'Capacitor', 'TypeScript', 'Firebase', 'Tailwind'],
    links: { appStore: null, playStore: null },
  },
  {
    id: 'binario',
    title: 'Binario',
    year: 2023,
    description:
      'App per controllare gli orari dei treni in modo veloce, senza fronzoli. Cerca una tratta e vedi subito partenze, arrivi e binari.',
    descriptionEn:
      'App for checking train schedules quickly, without clutter. Search a route and instantly see departures, arrivals, and platforms.',
    tech: ['React Native', 'Expo', 'TypeScript', 'NativeWind'],
    links: { appStore: null, playStore: null },
  },
]
