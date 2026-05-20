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
      'Un\'app per organizzare e gestire tornei di calcio balilla: iscrizioni, tabelloni e punteggi. È un progetto personale che ho costruito insieme a un collega nel tempo libero, nato dalle nostre partite a biliardino in ufficio.',
    descriptionEn:
      'An app to organize and run foosball tournaments: sign-ups, brackets and scores. It\'s a personal project I built together with a colleague in our spare time, born out of our office foosball matches.',
    tech: ['React Native', 'Expo', 'Firebase', 'TypeScript'],
    featured: true,
  },
  {
    id: 'lupus-app',
    title: 'Lupus in Tavola',
    year: 2023,
    description:
      'Companion app per Lupus in Tavola, pensata per chi fa da narratore: gestisce ruoli, turni e fasi di gioco direttamente da iOS e Android, così non serve più tenere tutto a mente o su carta. Sta crescendo per permettere anche partite in multigiocatore, restando sempre una companion del gioco da tavolo.',
    descriptionEn:
      'A companion app for the party game Werewolf (Lupus in Tavola), made for whoever runs the game: it handles roles, turns and game phases straight from iOS and Android, so you no longer have to keep everything in your head or on paper. It\'s growing to support multiplayer games too, while staying a companion to the tabletop game.',
    tech: ['Capacitor', 'Vue', 'TypeScript'],
  },
  {
    id: 'binario',
    title: 'Binario',
    year: 2023,
    description:
      'Un\'app per controllare gli orari dei treni in modo veloce e senza fronzoli. Cerchi la tratta e vedi subito partenze, arrivi e binari.',
    descriptionEn:
      'An app to check train schedules quickly, with no clutter. Search a route and you immediately get departures, arrivals and platforms.',
    tech: ['React Native', 'Expo', 'Node.js'],
  },
]
