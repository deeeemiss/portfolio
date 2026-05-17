import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Experience } from '../Experience'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (k: string) => k,
    i18n: { language: 'it' },
  }),
}))

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...p }: React.HTMLAttributes<HTMLDivElement>) => <div {...p}>{children}</div>,
  },
}))

describe('Experience section', () => {
  it('renders the section label', () => {
    render(<Experience />)
    expect(screen.getByText('experience.title')).toBeTruthy()
  })

  it('renders NTT Data experience', () => {
    render(<Experience />)
    expect(screen.getByText('NTT Data')).toBeTruthy()
  })

  it('renders tech tags for first experience', () => {
    render(<Experience />)
    expect(screen.getByText('Angular')).toBeTruthy()
    expect(screen.getAllByText('C#').length).toBeGreaterThan(0)
  })

  it('renders IT description when language is IT', () => {
    render(<Experience />)
    expect(screen.getByText(/Sviluppo frontend/)).toBeTruthy()
  })

  it('shows date ranges', () => {
    render(<Experience />)
    expect(screen.getByText('2024 — Presente')).toBeTruthy()
  })
})
