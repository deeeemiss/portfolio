import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { ProjectCard } from '../ui/ProjectCard'
import { projects } from '../../data/projects'

const VISIBLE_COUNT = 3

export function Projects() {
  const { t } = useTranslation()
  const [overlayOpen, setOverlayOpen] = useState(false)
  const visible = projects.slice(0, VISIBLE_COUNT)

  useEffect(() => {
    if (!overlayOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOverlayOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [overlayOpen])

  return (
    <section id="projects" className="scroll-mt-4">
      <h2 className="text-[10px] font-bold uppercase tracking-[3px] text-text-primary/35 mb-7">
        {t('projects.title')}
      </h2>

      <div className="flex flex-col gap-1">
        {visible.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <button
        onClick={() => setOverlayOpen(true)}
        className="mt-6 text-[11px] font-semibold text-accent/70 hover:text-accent uppercase tracking-[2px] transition-colors flex items-center gap-2 group"
      >
        <span className="h-px w-6 bg-accent/40 group-hover:bg-accent group-hover:w-10 transition-all duration-300" />
        {t('projects.view_all')} ({projects.length})
      </button>

      <AnimatePresence>
        {overlayOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-bg-base/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOverlayOpen(false)}
            />

            {/* Panel */}
            <motion.div
              className="fixed inset-0 z-50 overflow-y-auto"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <div className="min-h-full bg-bg-base px-8 py-12 md:px-16 md:py-16 max-w-[800px] mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                  <h2 className="font-serif italic text-2xl text-text-primary">
                    {t('projects.title')}
                  </h2>
                  <button
                    onClick={() => setOverlayOpen(false)}
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-text-primary/20 text-text-primary/45 hover:border-accent hover:text-accent transition-colors"
                    aria-label="Close"
                  >
                    <X size={15} />
                  </button>
                </div>

                {/* All projects */}
                <div className="flex flex-col gap-1">
                  {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
