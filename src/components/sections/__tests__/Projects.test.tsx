import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Projects } from '../Projects'
import { projects } from '../../../data/projects'

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...p }: React.HTMLAttributes<HTMLDivElement>) => <div {...p}>{children}</div>,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}))

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (k: string) => k,
    i18n: { language: 'it' },
  }),
}))

vi.mock('../../ui/AnimatedSection', () => ({
  AnimatedSection: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}))

vi.mock('../../ui/ProjectCard', () => ({
  ProjectCard: ({ project }: { project: { title: string } }) => <div data-testid="project-card">{project.title}</div>,
}))

const devCount = projects.filter(p => p.category === 'dev').length
const creativeCount = projects.filter(p => p.category === 'creative').length

describe('Projects section', () => {
  it('shows all projects by default', () => {
    render(<Projects />)
    expect(screen.getAllByTestId('project-card').length).toBe(projects.length)
  })

  it('filters to dev projects only', () => {
    render(<Projects />)
    fireEvent.click(screen.getByText('projects.filter_dev'))
    expect(screen.getAllByTestId('project-card').length).toBe(devCount)
  })

  it('filters to creative projects only', () => {
    render(<Projects />)
    fireEvent.click(screen.getByText('projects.filter_creative'))
    expect(screen.getAllByTestId('project-card').length).toBe(creativeCount)
  })

  it('returns to all projects when All is clicked', () => {
    render(<Projects />)
    fireEvent.click(screen.getByText('projects.filter_dev'))
    fireEvent.click(screen.getByText('projects.filter_all'))
    expect(screen.getAllByTestId('project-card').length).toBe(projects.length)
  })
})
