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
  tech: string[]
}

export const experiences: Experience[] = [
  {
    id: 'ntt',
    dateRange: '2024 — Presente',
    dateRangeEn: '2024 — Present',
    role: 'Software Developer',
    company: 'NTT Data',
    companyUrl: 'https://it.nttdata.com',
    logoUrl: '/logos/ntt-data.svg',
    description:
      'Sviluppo frontend e mobile per clienti enterprise in contesti Agile. App React Native per gestione tornei foosball con classifiche real-time e notifiche push. Integrazioni API REST e architetture Angular + .NET.',
    descriptionEn:
      'Frontend and mobile development for enterprise clients in Agile environments. React Native app for foosball tournament management with real-time leaderboards and push notifications. REST API integrations and Angular + .NET architectures.',
    tech: ['Angular', 'React Native', 'TypeScript', 'C#', '.NET', 'Azure DevOps'],
  },
  {
    id: 'alphawaves',
    dateRange: 'Ott 2023 — Apr 2024',
    dateRangeEn: 'Oct 2023 — Apr 2024',
    role: 'Full-stack Developer',
    company: 'AlphaWaves',
    logoUrl: '/logos/alphawaves.png',
    description:
      'Sviluppo back-end di una piattaforma benessere in team di quattro persone. Progettazione dei layer di dati e interfacciamento con il front-end. Successivo refactor del sito aziendale con WordPress, Elementor e JavaScript custom.',
    descriptionEn:
      'Back-end development of a wellness platform in a four-person team. Data layer design and front-end integration. Subsequent corporate website rebuild with WordPress, Elementor and custom JavaScript.',
    tech: ['Kotlin', 'Spring Boot', 'MongoDB', 'MySQL', 'WordPress', 'JavaScript'],
  },
  {
    id: 'msc',
    dateRange: 'Feb 2023 — Set 2023',
    dateRangeEn: 'Feb 2023 — Sep 2023',
    role: 'Junior Developer Intern',
    company: 'MSC Technology Italy',
    companyUrl: 'https://www.msctechnology.com',
    logoUrl: '/logos/msc-technology.svg',
    description:
      'Stage su due progetti interni: digital signage board (UX/UI design + CMS) e refactor UI di un applicativo con design moderno e minimal. Lavoro in team Agile con SCSS, HTML e JavaScript; esposizione a C# e Azure DevOps.',
    descriptionEn:
      'Internship across two internal projects: digital signage board (UX/UI design + CMS) and UI refactor with modern minimal design. Agile team using SCSS, HTML and JavaScript; exposure to C# and Azure DevOps.',
    tech: ['HTML', 'SCSS', 'JavaScript', 'C#', 'Agile', 'UX/UI Design'],
  }
]
