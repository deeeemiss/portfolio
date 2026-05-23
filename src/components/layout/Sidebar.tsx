import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './LanguageSwitcher'
import { useActiveSection } from '../../hooks/useActiveSection'
import { projects, isProjectReady } from '../../data/projects'

const SECTION_IDS = ['about', 'experience', 'projects'] as const
type SectionId = (typeof SECTION_IDS)[number]
const SECTION_IDS_ARRAY: string[] = [...SECTION_IDS]

const NAV_ITEMS: { id: SectionId; key: string }[] = [
  { id: 'about', key: 'nav.about' },
  { id: 'experience', key: 'nav.experience' },
  { id: 'projects', key: 'nav.projects' },
]

interface SocialLink {
  href: string
  label: string
  tooltip?: string
  path: string
  viewBox?: string
  scale?: number
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
    href: 'https://www.behance.net/deeeemiss',
    label: 'Behance',
    tooltip: 'Behance — coming soon',
    disabled: true,
    viewBox: '0 0 512 512',
    scale: 1.15,
    path: 'M344.1,233.6c-28.9,0-32.9,28.8-32.9,28.8h61.4S373,233.6,344.1,233.6Z M204.8,262.4H150.4v50h51.7c7.8-.2,22.4-2.4,22.4-24.3C224.5,262.1,204.8,262.4,204.8,262.4Z M256,32C132.3,32,32,132.3,32,256S132.3,480,256,480,480,379.7,480,256,379.7,32,256,32Zm47.2,137.6h77.1v23H303.2v-23Zm-39,120.8c0,57-59.4,55.2-59.4,55.2H107.6v-187h97.2c29.6,0,52.9,16.3,52.9,49.8S229.2,244,229.2,244C266.8,244,264.2,290.4,264.2,290.4Zm144.2-3.1H311.5c0,34.7,32.9,32.5,32.9,32.5,31.1,0,30-20.1,30-20.1h32.9c0,53.4-64,49.7-64,49.7-76.7,0-71.8-71.5-71.8-71.5s-.1-71.8,71.8-71.8C419,206.2,408.4,287.3,408.4,287.3Z M218,211.3c0-19.4-13.2-19.4-13.2-19.4H150.4v41.7h51C210.2,233.6,218,230.7,218,211.3Z',
  },
  {
    href: 'mailto:sebastianodemichelis@gmail.com',
    label: 'Email',
    path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z',
  },
]

const hasReadyProjects = projects.some(isProjectReady)

export function Sidebar() {
  const { t } = useTranslation()
  const active = useActiveSection(SECTION_IDS_ARRAY)
  const navItems = hasReadyProjects ? NAV_ITEMS : NAV_ITEMS.filter(i => i.id !== 'projects')

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
          {navItems.map(({ id, key }) => {
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
        {SOCIAL_LINKS.map(({ href, label, tooltip, path, viewBox, scale, disabled }) =>
          disabled ? (
            <span
              key={label}
              aria-label={label}
              className="relative group/tip text-text-primary/25 cursor-not-allowed"
            >
              <svg viewBox={viewBox ?? '0 0 24 24'} fill="currentColor" className="w-5 h-5" style={scale ? { transform: `scale(${scale})` } : undefined}>
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
              <svg viewBox={viewBox ?? '0 0 24 24'} fill="currentColor" className="w-5 h-5" style={scale ? { transform: `scale(${scale})` } : undefined}>
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
