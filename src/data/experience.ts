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
      'Sviluppo di progetti enterprise Angular + .NET in team Agile. Lavoro su test framework e automazione, con esposizione a Linux CLI e Docker.',
    descriptionEn:
      'Enterprise Angular + .NET projects in an Agile team. Work on test frameworks and automation, with exposure to Linux CLI and Docker.',
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
      'Sviluppo back-end di una piattaforma benessere in team di quattro persone, usando Kotlin, Spring Boot, MongoDB e MySQL. Successivo refactor del sito aziendale con WordPress, Elementor e JavaScript custom.',
    descriptionEn:
      'Back-end development of a wellness platform in a four-person team using Kotlin, Spring Boot, MongoDB and MySQL. Subsequent corporate website rebuild with WordPress, Elementor and custom JavaScript.',
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
      'Stage su due progetti interni: digital signage board progettata da zero (UX/UI + CMS) e refactor UI con design moderno e minimal in team Agile con SCSS, HTML e JavaScript. Prima esposizione a C# e Azure DevOps.',
    descriptionEn:
      'Internship across two internal projects: digital signage board designed from scratch (UX/UI + CMS) and a UI refactor with modern minimal design in an Agile team using SCSS, HTML and JavaScript. First exposure to C# and Azure DevOps.',
    tech: ['HTML', 'SCSS', 'JavaScript', 'C#', 'Agile', 'UX/UI Design'],
  }
]
