import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SkillTag } from '../ui/SkillTag'
import { codeSkills, creativeSkills } from '../../data/skills'

type Tab = 'code' | 'creative'

export function Skills() {
  const { t } = useTranslation()
  const [tab, setTab] = useState<Tab>('code')

  const tabs: { key: Tab; label: string }[] = [
    { key: 'code', label: t('skills.tab_code') },
    { key: 'creative', label: t('skills.tab_creative') },
  ]

  return (
    <section id="skills" className="py-28 bg-bg-base">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="font-serif italic text-4xl text-text-primary mb-12">{t('skills.title')}</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          {/* tab selector */}
          <div className="flex gap-1 p-1 bg-bg-surface rounded-xl w-fit mb-10">
            {tabs.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`relative px-6 py-2 text-xs font-bold uppercase tracking-widest rounded-lg transition-colors duration-200 ${
                  tab === key ? 'text-bg-base' : 'text-text-primary/55 hover:text-text-primary'
                }`}
              >
                {tab === key && (
                  <motion.div
                    layoutId="tab-pill"
                    className="absolute inset-0 bg-accent rounded-lg"
                    style={{ zIndex: -1 }}
                  />
                )}
                {label}
              </button>
            ))}
          </div>

          {/* tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="flex flex-wrap gap-3"
            >
              {(tab === 'code' ? codeSkills : creativeSkills).map(skill => (
                <SkillTag key={skill} label={skill} variant={tab} />
              ))}
            </motion.div>
          </AnimatePresence>
        </AnimatedSection>
      </div>
    </section>
  )
}
