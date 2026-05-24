import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const EMAIL_PATH = 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z'
const LINKEDIN_PATH = 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
const GITHUB_PATH = 'M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z'

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
    </section>
  )
}
