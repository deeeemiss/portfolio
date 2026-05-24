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
      'Lavoro su progetti molto diversi nel reparto R&D: ho sviluppato il frontend di app web per la gestione di PLC e un chatbot su policy, welfare e documentazione aziendale, risolto vulnerabilità di sicurezza su software in produzione e realizzato un gestionale per flotte di veicoli. In parallelo sviluppo una dashboard embedded per scooter su microcontrollore.',
    descriptionEn:
      'Work across a wide range of projects in the R&D team. Built the frontend of web apps for PLC management and an internal chatbot on company policies, welfare, and documentation, resolved security vulnerabilities on production software, and delivered a vehicle fleet management tool end-to-end. Also building an embedded scooter dashboard for a microcontroller display.',
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
      'Lavorato al backend di un\'app per il benessere commissionata da un cliente esterno. Integrato le API con il frontend, gestita l\'autenticazione degli utenti e curato il flusso dei dati tra i layer dell\'applicazione.',
    descriptionEn:
      'Worked on the backend of a wellness app commissioned by an external client. Integrated APIs with the frontend, managed user authentication, and handled data flow across the application layers.',
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
      'Lavorato a due progetti interni: una bacheca digitale seguita dal design fino allo sviluppo, e il redesign dell\'interfaccia di un\'applicazione per le risorse umane.',
    descriptionEn:
      'Worked on two internal projects: a digital signage board handled end-to-end from design to development, and a UI redesign of an HR application.',
    tech: ['HTML', 'SCSS', 'jQuery', 'C#', 'MySQL', 'MagicINFO', 'Azure DevOps', 'Figma', 'Agile', 'UX/UI Design'],
  }
]
