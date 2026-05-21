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
      'Riprese aeree con il drone. Cerco l\'inquadratura e il movimento giusto per dare profondità a paesaggi, coste e luoghi che mi capita di esplorare.',
    descriptionEn:
      'Aerial footage shot with a drone. I look for the right framing and movement to give depth to landscapes, coastlines and the places I happen to explore.',
    tags: ['Drone', 'DaVinci Resolve', '4K', 'Color Grading'],
  },
  {
    id: 'video',
    title: 'Video Production',
    description:
      'Montaggio ed editing video per brand e progetti personali. Mi occupo del taglio, del ritmo e del color grading per dare al filmato il look giusto.',
    descriptionEn:
      'Video editing and post-production for brands and personal projects. I handle the cut, the pacing and the color grading to give the footage the right look.',
    tags: ['Video Editing', 'Adobe Premiere', 'DaVinci Resolve'],
  },
]
