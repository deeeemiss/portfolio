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
      'Nel reparto R&D mi occupo di progetti molto diversi tra loro. Ho sviluppato il frontend di applicazioni web per la gestione di PLC e di un chatbot AI per le risorse umane, costruito da zero un gestionale per flotte di veicoli — backend, frontend e modello del database — e sistemato vulnerabilità di sicurezza su applicazioni già in produzione. In parallelo lavoro a una dashboard per scooter scritta in C, pensata per girare su un microcontrollore con un piccolo display.',
    descriptionEn:
      'In the R&D team I work on projects that are wildly different from one another. I\'ve built the frontend for web apps managing PLCs and an AI chatbot for HR, created a vehicle-fleet management tool from scratch — backend, frontend and database model — and fixed security vulnerabilities on apps already in production. On the side I\'m building a scooter dashboard written in C, made to run on a microcontroller with a small display.',
    tech: ['Angular', 'React Native', 'TypeScript', 'C#', '.NET', 'Azure DevOps'],
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
      'Ho lavorato al backend di un\'applicazione per il benessere commissionata da un\'azienda esterna, usando Kotlin e Spring con database MySQL e MongoDB. Mi sono occupato di collegare le API REST al frontend in Angular e di gestire l\'autenticazione con i JWT. È qui che ho capito davvero come è strutturato un backend e come scorrono i dati tra i vari layer.',
    descriptionEn:
      'I worked on the backend of a wellness app commissioned by an external company, using Kotlin and Spring with MySQL and MongoDB databases. I connected the REST APIs to the Angular frontend and handled authentication with JWTs. This is where I really understood how a backend is structured and how data flows between the layers.',
    tech: ['Kotlin', 'Spring Boot', 'MongoDB', 'MySQL', 'WordPress', 'JavaScript'],
  },
  {
    id: 'msc',
    dateRange: 'Feb 2023 — Set 2023',
    dateRangeEn: 'Feb 2023 — Sep 2023',
    role: 'Junior Developer Intern',
    company: 'MSC Technology Italy',
    companyUrl: 'https://msc-technology.com',
    logoUrl: '/logos/msc-technology.png',
    logoHeightClass: 'h-7',
    description:
      'Ho lavorato a due progetti interni: una bacheca digitale seguita dal design fino allo sviluppo, e il redesign dell\'interfaccia di un\'applicazione per le risorse umane. Qui ho messo le mani su HTML, SCSS e jQuery e ho imparato a lavorare in un team con metodologie Agile.',
    descriptionEn:
      'I worked on two internal projects: a digital board I followed from design through development, and the UI redesign of an HR application. This is where I got hands-on with HTML, SCSS and jQuery, and learned to work in a team running Agile.',
    tech: ['HTML', 'SCSS', 'JavaScript', 'C#', 'Agile', 'UX/UI Design'],
  }
]
