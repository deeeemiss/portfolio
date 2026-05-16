export interface Experience {
  id: string
  dateRange: string
  role: string
  company: string
  companyUrl?: string
  description: string
  descriptionEn: string
  tech: string[]
}

export const experiences: Experience[] = [
  {
    id: 'ntt',
    dateRange: '2023 — Presente',
    role: 'Software Developer',
    company: 'NTT Data',
    description:
      'Sviluppo frontend e backend per clienti enterprise. App tracking foosball, integrazioni API REST, architetture Angular + .NET in contesti Agile.',
    descriptionEn:
      'Frontend and backend development for enterprise clients. Foosball tracking app, REST API integrations, Angular + .NET architectures in Agile environments.',
    tech: ['Angular', 'C#', 'TypeScript', '.NET'],
  },
  {
    id: 'freelance',
    dateRange: '2021 — 2023',
    role: 'Freelance Developer & Video Editor',
    company: '',
    description:
      'Siti web su misura, app mobile con React Native, video production e color grading per brand locali e creator.',
    descriptionEn:
      'Custom web projects, React Native mobile apps, video production and color grading for local brands and creators.',
    tech: ['React Native', 'Vue', 'DaVinci Resolve'],
  },
]
