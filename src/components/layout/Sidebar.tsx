import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './LanguageSwitcher'
import { useActiveSection } from '../../hooks/useActiveSection'

const SECTION_IDS = ['about', 'experience', 'skills', 'projects'] as const
type SectionId = (typeof SECTION_IDS)[number]
const SECTION_IDS_ARRAY: string[] = [...SECTION_IDS]

const NAV_ITEMS: { id: SectionId; key: string }[] = [
  { id: 'about', key: 'nav.about' },
  { id: 'experience', key: 'nav.experience' },
  { id: 'skills', key: 'nav.skills' },
  { id: 'projects', key: 'nav.projects' },
]

interface SocialLink {
  href: string
  label: string
  tooltip?: string
  path: string
  disabled?: boolean
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/deeeemiss',
    label: 'GitHub',
    path: 'M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z',
  },
  {
    href: 'https://www.linkedin.com/in/sebastiano-demichelis',
    label: 'LinkedIn',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    href: 'https://www.instagram.com/deeeemiss',
    label: 'Instagram',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    href: 'https://www.behance.net/deeeemiss',
    label: 'Behance',
    tooltip: 'Behance — coming soon',
    disabled: true,
    path: 'M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.2.577 1.81 1.58 1.81.846 0 1.302-.397 1.462-1.09l2.714.32zm-4.127-5.67c-.5 0-1.215.335-1.58 1.215h3.245c-.12-1.038-.9-1.215-1.665-1.215zm-7.44-1.52c0-1.5-1.024-2.31-2.565-2.31H6.17v4.65h2.04c1.458 0 2.548-.86 2.548-2.34zM6.17 16.86h2.24c1.563 0 2.526-.764 2.526-2.116 0-1.354-.963-2.116-2.526-2.116H6.17v4.232zM2 5v14h8.07c2.51 0 4.43-1.613 4.43-4.127 0-1.745-.97-3.06-2.59-3.558 1.215-.55 1.998-1.69 1.998-3.063C13.908 6.27 12.032 5 9.448 5H2z',
  },
  {
    href: 'mailto:sebastianodemichelis@gmail.com',
    label: 'Email',
    path: 'M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z',
  },
]

export function Sidebar() {
  const { t } = useTranslation()
  const active = useActiveSection(SECTION_IDS_ARRAY)

  return (
    <aside className="md:sticky md:top-0 md:h-screen md:w-[36%] md:flex-shrink-0 flex flex-col justify-between px-8 py-16 md:px-12 md:py-24">
      <div>
        {/* Identity */}
        <div>
          <h1 className="font-sans text-3xl md:text-[36px] font-extrabold text-text-primary leading-tight tracking-tight whitespace-nowrap">
Sebastiano Demichelis
          </h1>
          <p className="text-accent font-semibold text-base mt-2">
            Software Developer &amp; Creative
          </p>
          <p className="text-text-primary/50 text-sm mt-3 leading-relaxed max-w-[280px]">
            {t('profile.tagline')}
          </p>
        </div>

        {/* Nav — hidden on mobile */}
        <nav className="hidden md:flex flex-col gap-1 mt-12" aria-label={t('nav.aria_label')}>
          {NAV_ITEMS.map(({ id, key }) => {
            const isActive = active === id
            return (
              <a
                key={id}
                href={id === 'about' ? '#' : `#${id}`}
                onClick={id === 'about' ? (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) } : undefined}
                className="group flex items-center gap-3.5 py-1.5"
              >
                <span
                  className={`h-px transition-all duration-300 ease-in-out group-hover:w-[52px] group-hover:bg-accent ${
                    isActive ? 'w-[52px] bg-accent' : 'w-6 bg-text-primary/25'
                  }`}
                />
                <span
                  className={`text-[10px] font-bold uppercase tracking-[3px] transition-colors duration-300 group-hover:text-text-primary ${
                    isActive ? 'text-text-primary' : 'text-text-primary/40'
                  }`}
                >
                  {t(key)}
                </span>
              </a>
            )
          })}
        </nav>

        {/* Language switcher */}
        <div className="mt-8">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Social links */}
      <div className="flex gap-4 mt-10">
        {SOCIAL_LINKS.map(({ href, label, tooltip, path, disabled }) =>
          disabled ? (
            <span
              key={label}
              aria-label={label}
              className="relative group/tip text-text-primary/25 cursor-not-allowed"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d={path} />
              </svg>
              <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-bg-surface border border-text-primary/10 px-2.5 py-1 text-[11px] font-medium text-text-primary/70 opacity-0 translate-y-1 group-hover/tip:opacity-100 group-hover/tip:translate-y-0 transition-all duration-200">
                {tooltip ?? label}
              </span>
            </span>
          ) : (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              aria-label={label}
              className="relative group/tip text-text-primary/55 hover:text-text-primary transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d={path} />
              </svg>
              <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-bg-surface border border-text-primary/10 px-2.5 py-1 text-[11px] font-medium text-text-primary/70 opacity-0 translate-y-1 group-hover/tip:opacity-100 group-hover/tip:translate-y-0 transition-all duration-200">
                {tooltip ?? label}
              </span>
            </a>
          )
        )}
      </div>
    </aside>
  )
}
