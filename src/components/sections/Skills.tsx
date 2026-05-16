import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
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
    <section id="skills" className="scroll-mt-4">
      <h2 className="text-[10px] font-bold uppercase tracking-[3px] text-text-primary/35 mb-7">
        {t('skills.title')}
      </h2>

      {/* Tab selector */}
      <div className="flex gap-1 p-1 bg-bg-surface rounded-xl w-fit mb-8">
        {tabs.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`relative px-5 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-colors duration-200 ${
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
    </section>
  )
}
