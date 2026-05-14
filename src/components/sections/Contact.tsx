import { useTranslation } from 'react-i18next'
import { Mail, Linkedin, Github } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'

const LINKS = [
  {
    Icon: Mail,
    labelKey: 'contact.email' as const,
    href: 'mailto:sebastianodemichelis@gmail.com',
    external: false,
  },
  {
    Icon: Linkedin,
    labelKey: 'contact.linkedin' as const,
    href: 'https://linkedin.com/in/sebastianodemichelis',
    external: true,
  },
  {
    Icon: Github,
    labelKey: 'contact.github' as const,
    href: 'https://github.com/deeeemiss',
    external: true,
  },
]

export function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-28 bg-bg-base">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="font-serif italic text-4xl text-text-primary mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-text-primary/55 mb-16 text-lg max-w-md mx-auto">
            {t('contact.subtitle')}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="flex justify-center gap-10 flex-wrap">
            {LINKS.map(({ Icon, labelKey, href, external }) => (
              <a
                key={labelKey}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="flex flex-col items-center gap-3 text-text-primary/55 hover:text-accent transition-colors group"
              >
                <div className="p-4 bg-bg-surface rounded-xl group-hover:bg-bg-elevated transition-colors">
                  <Icon size={22} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest">
                  {t(labelKey)}
                </span>
              </a>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="mt-20 text-xs text-text-primary/25 uppercase tracking-widest">
            Sebastiano Demichelis &copy; {new Date().getFullYear()}
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
