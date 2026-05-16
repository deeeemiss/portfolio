import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CreativeWork } from '../CreativeWork'

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

describe('CreativeWork section', () => {
  it('renders the section label', () => {
    render(<CreativeWork />)
    expect(screen.getByText('creative.title')).toBeTruthy()
  })

  it('renders Aerial Cinematography', () => {
    render(<CreativeWork />)
    expect(screen.getByText('Aerial Cinematography')).toBeTruthy()
  })

  it('renders Video Production', () => {
    render(<CreativeWork />)
    expect(screen.getByText('Video Production')).toBeTruthy()
  })

  it('renders IT description when language is IT', () => {
    render(<CreativeWork />)
    expect(screen.getByText(/Riprese drone/)).toBeTruthy()
  })

  it('renders tech tags', () => {
    render(<CreativeWork />)
    expect(screen.getByText('Drone')).toBeTruthy()
    expect(screen.getAllByText('DaVinci Resolve').length).toBeGreaterThan(0)
  })

  it('renders no external links', () => {
    render(<CreativeWork />)
    expect(screen.queryByRole('link')).toBeNull()
  })
})
