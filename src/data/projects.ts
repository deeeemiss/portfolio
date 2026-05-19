export interface Project {
  id: string
  title: string
  year: number
  madeAt?: string
  description: string
  descriptionEn?: string
  tech: string[]
  image?: string
  link?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'foosball',
    title: 'FOOSBALL',
    year: 2024,
    description:
      'App mobile per la gestione di tornei di calcio balilla, sviluppata con un collega. Classifiche real-time, profili giocatori, notifiche push e sistema di matchmaking.',
    descriptionEn:
      'Mobile app for foosball tournament management, built with a colleague. Real-time leaderboards, player profiles, push notifications and matchmaking system.',
    tech: ['React Native', 'Expo', 'Firebase', 'TypeScript'],
    featured: true,
  },
  {
    id: 'lupus-app',
    title: 'Lupus in Tavola',
    year: 2023,
    description:
      'App iOS e Android per il gioco da tavolo Lupus in Tavola. Gestione ruoli, timer di gioco e sessioni con cronologia partite.',
    descriptionEn:
      'iOS and Android companion app for the Lupus in Tavola board game. Role management, game timers and sessions with match history.',
    tech: ['Capacitor', 'Vue', 'TypeScript'],
  },
  {
    id: 'binario',
    title: 'Binario',
    year: 2023,
    description:
      'App per orari e partenze dei treni italiani, con ricerca in tempo reale e notifiche di partenza.',
    descriptionEn:
      'Italian train schedule app with real-time departure search and push notifications.',
    tech: ['React Native', 'Expo', 'Node.js'],
  },
]
