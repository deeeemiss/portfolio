export type ProjectCategory = 'dev' | 'creative'

export interface Project {
  id: string
  title: string
  description: string
  descriptionEn?: string
  category: ProjectCategory
  tech?: string[]
  image?: string
  link?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'foosball',
    title: 'FOOSBALL',
    description: 'App mobile per la gestione di tornei di calcio balilla. Classifiche real-time, profili giocatori e notifiche push.',
    descriptionEn: 'Mobile app for foosball tournament management. Real-time leaderboards, player profiles and push notifications.',
    category: 'dev',
    tech: ['React Native', 'Expo', 'Firebase', 'TypeScript'],
    featured: true,
  },
  {
    id: 'lupus-app',
    title: 'Lupus in Tavola',
    description: 'App iOS e Android per il gioco da tavolo Lupus. Gestione ruoli, timer e sessioni di gioco.',
    descriptionEn: 'iOS and Android app for the Lupus board game. Role management, timers and game sessions.',
    category: 'dev',
    tech: ['Capacitor', 'Vue', 'TypeScript'],
  },
  {
    id: 'binario',
    title: 'Binario',
    description: 'App per consultare gli orari dei treni italiani con ricerca in tempo reale e notifiche di partenza.',
    descriptionEn: 'Italian train schedule app with real-time search and departure notifications.',
    category: 'dev',
    tech: ['React Native', 'Expo', 'Node.js'],
  },
  {
    id: 'aerial-reel',
    title: 'Aerial Reel 2024',
    description: 'Showreel delle riprese aeree con drone. Color grading cinematografico e montaggio musicale.',
    descriptionEn: 'Drone aerial footage showreel. Cinematic color grading and music-driven editing.',
    category: 'creative',
    featured: true,
  },
  {
    id: 'brand-video',
    title: 'Brand Video',
    description: 'Video promozionale per brand locale. Riprese, color grading e sound design completi.',
    descriptionEn: 'Promotional video for a local brand. Full footage, color grading and sound design.',
    category: 'creative',
  },
]
