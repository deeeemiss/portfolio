import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { AnimatedSection } from '../ui/AnimatedSection'
import { ProjectCard } from '../ui/ProjectCard'
import { projects, type ProjectCategory } from '../../data/projects'

type Filter = 'all' | ProjectCategory

export function Projects() {
  const { t } = useTranslation()
  const [filter, setFilter] = useState<Filter>('all')

  const filtered =
    filter === 'all' ? projects : projects.filter(p => p.category === filter)

  const filters: { key: Filter; label: string }[] = [
    { key: 'all', label: t('projects.filter_all') },
    { key: 'dev', label: t('projects.filter_dev') },
    { key: 'creative', label: t('projects.filter_creative') },
  ]

  return (
    <section id="projects" className="py-28 bg-bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <h2 className="font-serif italic text-4xl text-text-primary">{t('projects.title')}</h2>
            <div className="flex gap-2 flex-wrap">
              {filters.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-lg transition-colors ${
                    filter === key
                      ? 'bg-accent text-bg-base'
                      : 'bg-bg-elevated text-text-primary/55 hover:text-text-primary'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filtered.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
