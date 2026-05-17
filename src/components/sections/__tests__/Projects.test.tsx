import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from '../Projects'
import { projects } from '../../../data/projects'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (k: string) => k,
    i18n: { language: 'it' },
  }),
}))

vi.mock('../../ui/ProjectCard', () => ({
  ProjectCard: ({ project }: { project: { title: string } }) => (
    <div data-testid="project-card">{project.title}</div>
  ),
}))

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}))

describe('Projects section', () => {
  it('renders first 3 projects', () => {
    render(<Projects />)
    const cards = screen.getAllByTestId('project-card')
    expect(cards.length).toBe(Math.min(3, projects.length))
  })

  it('renders the section label', () => {
    render(<Projects />)
    expect(screen.getByText('projects.title')).toBeTruthy()
  })

  it('renders FOOSBALL project', () => {
    render(<Projects />)
    expect(screen.getByText('FOOSBALL')).toBeTruthy()
  })

  it('renders the view all button', () => {
    render(<Projects />)
    expect(screen.getByText(/Vedi tutti|View all|projects\.view_all/)).toBeTruthy()
  })
})
