import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Sidebar } from '../Sidebar'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (k: string) => k,
    i18n: { language: 'it' },
  }),
}))

vi.mock('../../../hooks/useActiveSection', () => ({
  useActiveSection: () => 'about',
}))

vi.mock('../LanguageSwitcher', () => ({
  LanguageSwitcher: () => <div data-testid="lang-switcher" />,
}))

describe('Sidebar', () => {
  it('renders the name', () => {
    render(<Sidebar />)
    expect(screen.getByText('Sebastiano')).toBeTruthy()
    expect(screen.getByText('Demichelis')).toBeTruthy()
  })

  it('renders all nav links', () => {
    render(<Sidebar />)
    expect(screen.getByText('nav.about')).toBeTruthy()
    expect(screen.getByText('nav.experience')).toBeTruthy()
    expect(screen.getByText('nav.skills')).toBeTruthy()
    expect(screen.getByText('nav.projects')).toBeTruthy()
  })

  it('renders the LanguageSwitcher', () => {
    render(<Sidebar />)
    expect(screen.getByTestId('lang-switcher')).toBeTruthy()
  })

  it('renders social links', () => {
    render(<Sidebar />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThanOrEqual(3)
  })
})
