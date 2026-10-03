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
  imageCredit?: string
  animation?: string
  link?: string
  featured?: boolean
  platform?: 'mobile' | 'web' | 'desktop'
  links?: ProjectLinks
}

export function isProjectReady(project: Project): boolean {
  if (project.link) return true
  if (project.links) return Object.values(project.links).some(v => typeof v === 'string')
  return false
}

export const projects: Project[] = [
  {
    id: 'peek3d',
    title: 'Peek3D',
    year: 2026,
    description:
      'Visualizzatore di file 3D nativo per macOS, gratuito e open source: trascini un file e lo guardi. Apre glTF, FBX, OBJ, USD, STL e altri formati, con viste dagli assi, modalità di shading, wireframe e animazioni. Nessuna rete, nessun dato raccolto.',
    descriptionEn:
      'Free, open-source native 3D file viewer for macOS: drop a 3D file, look at it. Opens glTF, FBX, OBJ, USD, STL and more, with axis views, shading modes, wireframe and animation playback. No network, no data collected.',
    tech: ['Swift', 'SwiftUI', 'SceneKit', 'GLTFKit2', 'ufbx', 'Model I/O'],
    icon: '/images/projects/peek3d-icon.png',
    image: '/images/projects/peek3d.webp',
    animation: '/images/projects/peek3d-demo.webp',
    imageCredit: 'Fox model by PixelMannen (CC BY 4.0)',
    platform: 'desktop',
    featured: true,
    links: {
      website: 'https://deeeemiss.github.io/Peek3D/',
      github: 'https://github.com/deeeemiss/Peek3D',
    },
  },
  {
    id: 'lvgl-simulator',
    title: 'LVGL Simulator',
    year: 2026,
    description:
      'Simulatore LVGL nel browser: scrivi codice MicroPython e vedi il risultato in tempo reale su un display virtuale, senza installare nulla.',
    descriptionEn:
      'Web-based LVGL simulator: write MicroPython and see it run live on a virtual display, no setup needed.',
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
