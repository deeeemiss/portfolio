import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
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


describe('Projects section', () => {
  it('renders first 3 projects', () => {
    render(<MemoryRouter><Projects /></MemoryRouter>)
    const cards = screen.getAllByTestId('project-card')
    expect(cards.length).toBe(Math.min(3, projects.length))
  })

  it('renders the section label', () => {
    render(<MemoryRouter><Projects /></MemoryRouter>)
    expect(screen.getByText('projects.title')).toBeTruthy()
  })

  it('renders FOOSBALL project', () => {
    render(<MemoryRouter><Projects /></MemoryRouter>)
    expect(screen.getByText('FOOSBALL')).toBeTruthy()
  })

  it('renders the view all button', () => {
    render(<MemoryRouter><Projects /></MemoryRouter>)
    expect(screen.getByText(/Vedi tutti|View all|projects\.view_all/)).toBeTruthy()
  })
})
