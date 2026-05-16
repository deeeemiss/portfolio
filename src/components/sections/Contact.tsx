import { motion } from 'framer-motion'
import { Mail, Globe, Code2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const LINKS = [
  {
    Icon: Mail,
    labelKey: 'contact.email' as const,
    href: 'mailto:sebastianodemichelis@gmail.com',
    value: 'sebastianodemichelis@gmail.com',
    external: false,
  },
  {
    Icon: Globe,
    labelKey: 'contact.linkedin' as const,
    href: 'https://linkedin.com/in/sebastianodemichelis',
    value: 'linkedin.com/in/sebastianodemichelis',
    external: true,
  },
  {
    Icon: Code2,
    labelKey: 'contact.github' as const,
    href: 'https://github.com/deeeemiss',
    value: 'github.com/deeeemiss',
    external: true,
  },
]

export function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="scroll-mt-4 pb-24">
      <h2 className="text-[10px] font-bold uppercase tracking-[3px] text-text-primary/35 mb-7">
        {t('contact.title')}
      </h2>

      <div className="flex flex-col gap-1">
        {LINKS.map(({ Icon, labelKey, href, value, external }) => (
          <motion.a
            key={labelKey}
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className="flex items-center gap-4 p-4 rounded-xl border border-transparent text-text-primary/60"
            whileHover={{ backgroundColor: 'rgba(22,51,82,0.55)', borderColor: 'rgba(29,233,182,0.12)', color: '#1DE9B6' }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-9 h-9 bg-bg-surface rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon size={16} />
            </div>
            <div>
              <div className="text-[13px] font-medium text-text-primary">
                {t(labelKey)}
              </div>
              <div className="text-[11px] text-text-primary/35 mt-0.5">
                {value}
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <p className="mt-16 text-[10px] text-text-primary/25 uppercase tracking-widest">
        Sebastiano Demichelis &copy; {new Date().getFullYear()}
      </p>
    </section>
  )
}
