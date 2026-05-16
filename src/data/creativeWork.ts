export interface CreativeWork {
  id: string
  title: string
  description: string
  descriptionEn: string
  tags: string[]
}

export const creativeWorks: CreativeWork[] = [
  {
    id: 'aerial',
    title: 'Aerial Cinematography',
    description:
      'Riprese drone in tutta Italia — paesaggi, eventi, real estate. Color grading professionale in DaVinci Resolve.',
    descriptionEn:
      'Drone footage across Italy — landscapes, events, real estate. Professional color grading in DaVinci Resolve.',
    tags: ['Drone', 'DaVinci Resolve', '4K', 'Color Grading'],
  },
  {
    id: 'video',
    title: 'Video Production',
    description:
      'Brand video, documentari brevi e montaggio per creator. Dalla ripresa al prodotto finito.',
    descriptionEn:
      'Brand videos, short documentaries and editing for creators. From shooting to final product.',
    tags: ['Video Editing', 'Adobe Premiere', 'DaVinci Resolve'],
  },
]
