import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const EMAIL_PATH = 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z'

function SvgIcon({ path }: { path: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
      <path d={path} />
    </svg>
  )
}

const LINKS = [
  {
    path: EMAIL_PATH,
    labelKey: 'contact.email' as const,
    href: 'mailto:iseba.demichelis@icloud.com',
    value: 'iseba.demichelis@icloud.com',
    external: false,
  },
]

export function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="scroll-mt-4 pb-24">
      <h2 className="text-[10px] font-bold uppercase tracking-[3px] text-text-primary/35 mb-7">
        {t('contact.title')}
      </h2>

      <p className="font-sans text-2xl font-bold text-text-primary mb-2">
        {t('contact.headline')}
      </p>
      <p className="text-[13px] text-text-primary/50 mb-8">
        {t('contact.subtitle')}
      </p>

      <div className="flex flex-col gap-1">
        {LINKS.map(({ path, labelKey, href, value, external }) => (
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
              <SvgIcon path={path} />
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
      <p className="mt-2 text-[10px] text-text-primary/20">
        Built by Sebastiano Demichelis. Inspired by{' '}
        <a
          href="https://brittanychiang.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors duration-200"
        >
          Brittany Chiang
        </a>
        .
      </p>
    </section>
  )
}
