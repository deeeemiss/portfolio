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
      className="flex gap-4 p-4 rounded-xl border border-transparent cursor-default"
      whileHover={{ backgroundColor: 'rgba(22,51,82,0.55)', borderColor: 'rgba(29,233,182,0.12)' }}
      transition={{ duration: 0.2 }}
    >
      {/* Thumbnail */}
      <div className="w-[90px] h-[62px] rounded-md flex-shrink-0 overflow-hidden bg-bg-elevated">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-bg-elevated to-bg-base" />
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-serif italic text-[14px] font-bold text-text-primary leading-tight">
            {project.title}
          </h3>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent flex-shrink-0 mt-0.5"
              aria-label={`Open ${project.title}`}
            >
              <ExternalLink size={13} />
            </a>
          )}
        </div>

        <p className="text-[13px] text-text-primary/50 leading-relaxed mt-1 line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-2.5">
          {project.tech.map(tag => (
            <span
              key={tag}
              className="text-[11px] font-semibold text-accent bg-accent/7 border border-accent/22 rounded-full px-2.5 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
