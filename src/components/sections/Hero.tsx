import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const stagger = {
  container: {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  },
  item: {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  },
}

export function Hero() {
  const { t } = useTranslation()

  return (
    <section id="hero" className="relative min-h-screen flex items-end pb-24 overflow-hidden bg-bg-base">
      {/* decorative blobs */}
      <div
        className="absolute pointer-events-none rounded-full blur-3xl"
        style={{
          width: 500, height: 500,
          top: -150, right: -80,
          background: 'radial-gradient(circle, rgba(29,233,182,0.08) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full blur-2xl"
        style={{
          width: 260, height: 260,
          bottom: -80, left: 60,
          background: 'radial-gradient(circle, rgba(29,233,182,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div variants={stagger.container} initial="hidden" animate="show">
          <motion.p
            variants={stagger.item}
            className="text-xs font-bold uppercase tracking-[4px] text-accent mb-5"
          >
            {t('hero.role')}
          </motion.p>

          <motion.h1
            variants={stagger.item}
            className="font-serif italic font-bold leading-[1.0] text-text-primary mb-4"
            style={{ fontSize: 'clamp(42px, 8vw, 80px)' }}
          >
            Sebastiano
            <br />
            Demichelis
          </motion.h1>

          <motion.p
            variants={stagger.item}
            className="text-xs uppercase tracking-[2px] text-text-primary/50 mb-10"
          >
            {t('hero.stack')}
          </motion.p>

          <motion.div variants={stagger.item} className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-accent text-bg-base text-xs font-extrabold uppercase tracking-widest rounded-lg hover:bg-accent-light transition-colors"
            >
              {t('hero.cta_contact')}
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-text-primary/25 text-text-primary/60 text-xs font-semibold uppercase tracking-widest rounded-lg hover:border-text-primary/50 hover:text-text-primary transition-colors"
            >
              {t('hero.cta_work')}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
