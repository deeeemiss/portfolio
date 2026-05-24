import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProjectCard } from '../ProjectCard'
import type { Project } from '../../../data/projects'

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...p }: React.HTMLAttributes<HTMLDivElement>) => <div {...p}>{children}</div>,
  },
}))

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ i18n: { language: 'it' } }),
}))

const project: Project = {
  id: 'test',
  title: 'Test Project',
  description: 'Descrizione italiana.',
  descriptionEn: 'English description.',
  tech: ['React', 'TypeScript'],
  year: 2024,
}

const projectWithLink: Project = {
  ...project,
  id: 'test-link',
  link: 'https://example.com',
}

describe('ProjectCard', () => {
  it('renders title', () => {
    render(<ProjectCard project={project} />)
    expect(screen.getByText('Test Project')).toBeTruthy()
  })

  it('renders IT description when language is IT', () => {
    render(<ProjectCard project={project} />)
    expect(screen.getByText('Descrizione italiana.')).toBeTruthy()
  })

  it('renders tech tags', () => {
    render(<ProjectCard project={project} />)
    expect(screen.getByText('React')).toBeTruthy()
    expect(screen.getByText('TypeScript')).toBeTruthy()
  })

  it('does not render link when no link provided', () => {
    render(<ProjectCard project={project} />)
    expect(screen.queryByRole('link')).toBeNull()
  })

  it('renders external link when link is provided', () => {
    render(<ProjectCard project={projectWithLink} />)
    expect(screen.getByRole('link')).toBeTruthy()
  })
})
