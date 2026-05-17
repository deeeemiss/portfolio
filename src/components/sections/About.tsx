import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { SkillTag } from '../ui/SkillTag'
import { codeSkills, creativeSkills } from '../../data/skills'

type Tab = 'code' | 'creative'

export function About() {
  const { t } = useTranslation()
  const [tab, setTab] = useState<Tab>('code')

  const tabs: { key: Tab; label: string }[] = [
    { key: 'code', label: t('skills.tab_code') },
    { key: 'creative', label: t('skills.tab_creative') },
  ]

  return (
    <section id="about" className="scroll-mt-4">
      <h2 className="text-[11px] font-bold uppercase tracking-[3px] text-text-primary/35 mb-7">
        {t('about.title')}
      </h2>
      <div className="space-y-4 text-text-primary/65 leading-relaxed text-[15px]">
        <p>{t('about.bio1')}</p>
        <p>{t('about.bio2')}</p>
      </div>

      {/* Skills */}
      <div className="mt-10">
        <div className="flex gap-1 p-1 bg-bg-surface border border-text-primary/10 rounded-xl w-fit mb-6">
          {tabs.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`relative px-5 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-colors duration-200 cursor-pointer ${
                tab === key ? 'text-bg-base' : 'text-text-primary/45 hover:text-text-primary'
              }`}
            >
              {tab === key && (
                <motion.div
                  layoutId="about-tab-pill"
                  className="absolute inset-0 bg-accent rounded-lg"
                />
              )}
              <span className="relative z-10">{label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="flex flex-wrap gap-2.5"
          >
            {(tab === 'code' ? codeSkills : creativeSkills).map(skill => (
              <SkillTag key={skill} label={skill} variant={tab} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
