import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { LanguageSwitcher } from '../LanguageSwitcher'

const changeLanguageMock = vi.fn()
let currentLang = 'it'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    i18n: {
      get language() { return currentLang },
      changeLanguage: changeLanguageMock,
    },
  }),
}))

describe('LanguageSwitcher', () => {
  it('renders IT and EN labels', () => {
    render(<LanguageSwitcher />)
    expect(screen.getByText('IT')).toBeTruthy()
    expect(screen.getByText('EN')).toBeTruthy()
  })

  it('calls changeLanguage with "en" when EN button clicked', () => {
    currentLang = 'it'
    render(<LanguageSwitcher />)
    fireEvent.click(screen.getByRole('button', { name: /en/i }))
    expect(changeLanguageMock).toHaveBeenCalledWith('en')
  })

  it('calls changeLanguage with "it" when IT button clicked', () => {
    currentLang = 'en'
    render(<LanguageSwitcher />)
    fireEvent.click(screen.getByRole('button', { name: /it/i }))
    expect(changeLanguageMock).toHaveBeenCalledWith('it')
  })
})
