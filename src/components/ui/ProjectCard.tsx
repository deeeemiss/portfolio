import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import type { Project } from '../../data/projects'

interface Props {
  project: Project
}

export function ProjectCard({ project }: Props) {
  const { i18n } = useTranslation()
  const description =
    i18n.language === 'en' && project.descriptionEn
      ? project.descriptionEn
      : project.description

  return (
    <motion.div
      layout
      className="bg-bg-surface rounded-xl overflow-hidden border border-bg-elevated hover:border-accent/40 transition-colors group h-full flex flex-col"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="aspect-video bg-bg-elevated relative flex-shrink-0">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-bg-elevated to-bg-base" />
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 p-2 bg-bg-base/80 rounded-lg text-accent opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Open project"
          >
            <ExternalLink size={14} />
          </a>
        )}
        <span className="absolute bottom-3 left-3 px-2 py-1 bg-bg-base/80 rounded text-[10px] font-bold uppercase tracking-widest text-accent">
          {project.category}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-serif italic text-xl text-text-primary mb-2">{project.title}</h3>
        <p className="text-text-primary/55 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">{description}</p>
        {project.tech && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tech.map(t => (
              <span
                key={t}
                className="text-xs text-accent/70 bg-accent/5 border border-accent/15 px-2 py-0.5 rounded"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
