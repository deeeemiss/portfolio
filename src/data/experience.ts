export interface Experience {
  id: string
  dateRange: string
  dateRangeEn?: string
  role: string
  company?: string
  companyUrl?: string
  description: string
  descriptionEn: string
  logoUrl?: string
  logoHeightClass?: string
  tech: string[]
}

export const experiences: Experience[] = [
  {
    id: 'ntt',
    dateRange: 'Giu 2024 — Presente',
    dateRangeEn: 'Jun 2024 — Present',
    role: 'Software Developer',
    company: 'NTT Data',
    companyUrl: 'https://it.nttdata.com',
    logoUrl: '/logos/ntt-data.svg',
    description:
      'Nel reparto R&D mi occupo di progetti molto diversi tra loro. Ho sviluppato il frontend di applicazioni web per la gestione di PLC e di un chatbot per le risorse umane, costruito da zero un gestionale per flotte di veicoli curandone sia il database che l\'applicazione, e sistemato vulnerabilità di sicurezza su software già in produzione. In parallelo lavoro a una dashboard per scooter, pensata per girare su un microcontrollore con un piccolo display.',
    descriptionEn:
      'In the R&D team I work on projects that are wildly different from one another. I\'ve built the frontend for web apps managing PLCs and an HR chatbot, created a vehicle-fleet management tool from scratch — handling both its database and the application itself — and fixed security vulnerabilities on software already in production. On the side I\'m building a scooter dashboard, made to run on a microcontroller with a small display.',
    tech: ['Angular', 'Vue.js', 'Vuetify', 'PrimeNG', 'TypeScript', 'Python', 'C#', '.NET', 'C', 'Entity Framework', 'MongoDB', 'MySQL', 'PostgreSQL', 'SQL Server', 'REST API', 'Keycloak', 'RxJS', 'Tailwind', 'SCSS', 'UX/UI Design'],
  },
  {
    id: 'alphawaves',
    dateRange: 'Ott 2023 — Apr 2024',
    dateRangeEn: 'Oct 2023 — Apr 2024',
    role: 'Full-stack Developer',
    company: 'AlphaWaves',
    companyUrl: 'https://www.awaves.it',
    logoUrl: '/logos/alphawaves.png',
    logoHeightClass: 'h-10',
    description:
      'Ho lavorato al backend di un\'applicazione per il benessere commissionata da un\'azienda esterna. Mi sono occupato di collegare le API al frontend e di gestire l\'autenticazione degli utenti. È il progetto in cui ho capito davvero come funziona un backend e come si muovono i dati tra i vari layer.',
    descriptionEn:
      'I worked on the backend of a wellness app commissioned by an external company. I took care of wiring the APIs to the frontend and managing user authentication. It\'s the project where I really understood how a backend works and how data moves between the various layers.',
    tech: ['Kotlin', 'Spring Boot', 'MongoDB', 'MySQL', 'Angular', 'REST API', 'JWT', 'Docker', 'Linux'],
  },
  {
    id: 'msc',
    dateRange: 'Feb 2023 — Set 2023',
    dateRangeEn: 'Feb 2023 — Sep 2023',
    role: 'Front End Developer',
    company: 'MSC Technology Italy',
    companyUrl: 'https://msc-technology.com',
    logoUrl: '/logos/msc-technology.png',
    logoHeightClass: 'h-7',
    description:
      'Ho lavorato a due progetti interni: una bacheca digitale che ho seguito sia nel design che nello sviluppo, e il redesign dell\'interfaccia di un\'applicazione per le risorse umane. È stata la prima volta in cui mi sono inserito in un team vero e ho imparato a portare avanti il lavoro in modo organizzato.',
    descriptionEn:
      'I worked on two internal projects: a digital board I handled across both design and development, and the UI redesign of an HR application. It was the first time I properly slotted into a real team and learned to carry work forward in an organized way.',
    tech: ['HTML', 'SCSS', 'jQuery', 'C#', 'MySQL', 'MagicINFO', 'Azure DevOps', 'Figma', 'Agile', 'UX/UI Design'],
  }
]
