export interface Project {
  id: string
  title: string
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
    description:
      'App mobile per la gestione di tornei di calcio balilla. Classifiche real-time, profili giocatori e notifiche push.',
    descriptionEn:
      'Mobile app for foosball tournament management. Real-time leaderboards, player profiles and push notifications.',
    tech: ['React Native', 'Expo', 'Firebase', 'TypeScript'],
    featured: true,
  },
  {
    id: 'lupus-app',
    title: 'Lupus in Tavola',
    description:
      'App iOS e Android per il gioco da tavolo Lupus. Gestione ruoli, timer e sessioni di gioco.',
    descriptionEn:
      'iOS and Android app for the Lupus board game. Role management, timers and game sessions.',
    tech: ['Capacitor', 'Vue', 'TypeScript'],
  },
  {
    id: 'binario',
    title: 'Binario',
    description:
      'App per consultare gli orari dei treni italiani con ricerca in tempo reale e notifiche di partenza.',
    descriptionEn:
      'Italian train schedule app with real-time search and departure notifications.',
    tech: ['React Native', 'Expo', 'Node.js'],
  },
]
