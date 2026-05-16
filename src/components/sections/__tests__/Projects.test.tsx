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

describe('Projects section', () => {
  it('renders all projects', () => {
    render(<Projects />)
    expect(screen.getAllByTestId('project-card').length).toBe(projects.length)
  })

  it('renders the section label', () => {
    render(<Projects />)
    expect(screen.getByText('projects.title')).toBeTruthy()
  })

  it('renders FOOSBALL project', () => {
    render(<Projects />)
    expect(screen.getByText('FOOSBALL')).toBeTruthy()
  })
})
