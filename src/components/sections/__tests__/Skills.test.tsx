import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Skills } from '../Skills'
import { codeSkills, creativeSkills } from '../../../data/skills'

vi.mock('framer-motion', () => ({
  motion: { div: ({ children, ...p }: React.HTMLAttributes<HTMLDivElement>) => <div {...p}>{children}</div> },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}))

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (k: string) => k,
    i18n: { language: 'it' },
  }),
}))

describe('Skills section', () => {
  it('shows code skills by default', () => {
    render(<Skills />)
    expect(screen.getByText(codeSkills[0])).toBeTruthy()
  })

  it('switches to creative skills on tab click', () => {
    render(<Skills />)
    fireEvent.click(screen.getByText('skills.tab_creative'))
    expect(screen.getByText(creativeSkills[0])).toBeTruthy()
  })

  it('hides code skills after switching to creative', () => {
    render(<Skills />)
    fireEvent.click(screen.getByText('skills.tab_creative'))
    expect(screen.queryByText(codeSkills[0])).toBeNull()
  })
})
