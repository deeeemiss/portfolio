import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProjectCard } from '../ProjectCard'
import type { Project } from '../../../data/projects'

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>,
  },
}))

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ i18n: { language: 'it' } }),
}))

const devProject: Project = {
  id: 'test-dev',
  title: 'Test Project',
  description: 'Descrizione italiana.',
  descriptionEn: 'English description.',
  category: 'dev',
  tech: ['React', 'TypeScript'],
}

const creativeProject: Project = {
  id: 'test-creative',
  title: 'Creative Work',
  description: 'Lavoro creativo.',
  category: 'creative',
}

describe('ProjectCard', () => {
  it('renders title', () => {
    render(<ProjectCard project={devProject} />)
    expect(screen.getByText('Test Project')).toBeTruthy()
  })

  it('renders IT description when language is IT', () => {
    render(<ProjectCard project={devProject} />)
    expect(screen.getByText('Descrizione italiana.')).toBeTruthy()
  })

  it('renders tech tags for dev projects', () => {
    render(<ProjectCard project={devProject} />)
    expect(screen.getByText('React')).toBeTruthy()
    expect(screen.getByText('TypeScript')).toBeTruthy()
  })

  it('does not render tech section for creative projects', () => {
    render(<ProjectCard project={creativeProject} />)
    expect(screen.queryByText('React')).toBeNull()
  })

  it('does not render external link when no link provided', () => {
    render(<ProjectCard project={devProject} />)
    expect(screen.queryByRole('link')).toBeNull()
  })
})
