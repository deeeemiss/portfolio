import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import { LanguageSwitcher } from './LanguageSwitcher'

const NAV_LINKS = [
  { key: 'nav.about', href: '#about' },
  { key: 'nav.skills', href: '#skills' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.contact', href: '#contact' },
] as const

export function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg-base/90 backdrop-blur-md border-b border-bg-elevated' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-serif italic text-xl font-bold text-text-primary">
          SD
        </a>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <a
              key={l.key}
              href={l.href}
              className="text-xs font-semibold uppercase tracking-widest text-text-primary/55 hover:text-accent transition-colors"
            >
              {t(l.key)}
            </a>
          ))}
          <LanguageSwitcher />
        </nav>

        {/* mobile hamburger */}
        <button
          className="md:hidden text-text-primary"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden bg-bg-surface border-b border-bg-elevated px-6 pb-6 flex flex-col gap-1">
          {NAV_LINKS.map(l => (
            <a
              key={l.key}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-xs font-semibold uppercase tracking-widest text-text-primary/55 hover:text-accent transition-colors py-3 border-b border-bg-elevated last:border-0"
            >
              {t(l.key)}
            </a>
          ))}
          <div className="pt-3">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  )
}
