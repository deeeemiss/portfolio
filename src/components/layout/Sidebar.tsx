import { useTranslation } from 'react-i18next'
import { Mail, Globe, Code2 } from 'lucide-react'
import { LanguageSwitcher } from './LanguageSwitcher'
import { useActiveSection } from '../../hooks/useActiveSection'

const SECTION_IDS = ['about', 'experience', 'skills', 'projects', 'creative', 'contact'] as const
type SectionId = (typeof SECTION_IDS)[number]

const NAV_ITEMS: { id: SectionId; key: string }[] = [
  { id: 'about', key: 'nav.about' },
  { id: 'experience', key: 'nav.experience' },
  { id: 'skills', key: 'nav.skills' },
  { id: 'projects', key: 'nav.projects' },
  { id: 'creative', key: 'nav.creative' },
  { id: 'contact', key: 'nav.contact' },
]

const SOCIAL_LINKS = [
  { href: 'https://github.com/deeeemiss', label: 'GitHub', Icon: Code2 },
  { href: 'https://linkedin.com/in/sebastianodemichelis', label: 'LinkedIn', Icon: Globe },
  { href: 'mailto:sebastianodemichelis@gmail.com', label: 'Email', Icon: Mail },
]

export function Sidebar() {
  const { t } = useTranslation()
  const active = useActiveSection([...SECTION_IDS])

  return (
    <aside className="md:sticky md:top-0 md:h-screen md:w-[42%] md:flex-shrink-0 flex flex-col justify-between px-8 py-12 md:px-12 md:py-16">
      <div>
        {/* Identity */}
        <div>
          <h1 className="font-serif italic text-4xl md:text-[44px] font-bold text-text-primary leading-tight">
            <span className="block">Sebastiano</span>
            <span className="block">Demichelis</span>
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
                href={`#${id}`}
                className="flex items-center gap-3.5 py-1.5"
              >
                <span
                  className="h-px transition-all duration-300 ease-in-out"
                  style={{
                    width: isActive ? '52px' : '24px',
                    background: isActive ? '#1DE9B6' : 'rgba(240,234,214,0.25)',
                  }}
                />
                <span
                  className="text-[10px] font-bold uppercase tracking-[3px] transition-colors duration-300"
                  style={{ color: isActive ? '#F0EAD6' : 'rgba(240,234,214,0.4)' }}
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

      {/* Social icons */}
      <div className="flex gap-3.5 mt-10">
        {SOCIAL_LINKS.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            aria-label={label}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-text-primary/20 text-text-primary/45 hover:border-accent hover:text-accent transition-colors"
          >
            <Icon size={15} />
          </a>
        ))}
      </div>
    </aside>
  )
}
