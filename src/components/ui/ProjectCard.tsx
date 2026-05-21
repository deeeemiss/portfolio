import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import type { Project } from '../../data/projects'

interface Props {
  project: Project
}

function PhoneFrame({ image, title }: { image?: string; title: string }) {
  return (
    <div className="relative flex-shrink-0 w-[72px] h-[128px] rounded-[14px] border-2 border-white/15 bg-bg-elevated overflow-hidden shadow-md">
      <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[14px] h-[3px] rounded-full bg-white/20 z-10" />
      <div className="absolute inset-0 top-[14px] bottom-[10px] overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover object-top" />
        ) : (
          <div className="w-full h-full bg-gradient-to-b from-bg-elevated to-bg-base" />
        )}
      </div>
      <div className="absolute bottom-[4px] left-1/2 -translate-x-1/2 w-[18px] h-[2px] rounded-full bg-white/20 z-10" />
    </div>
  )
}

function MacFrame({ image, title }: { image?: string; title: string }) {
  return (
    <div className="flex-shrink-0 flex flex-col items-center">
      {/* screen */}
      <div className="relative w-[130px] h-[82px] rounded-[6px] border-2 border-white/15 bg-bg-elevated overflow-hidden shadow-md">
        {/* menubar */}
        <div className="absolute top-0 left-0 right-0 h-[8px] bg-white/8 flex items-center px-1.5 gap-1 z-10">
          <div className="w-[3px] h-[3px] rounded-full bg-white/25" />
          <div className="w-[3px] h-[3px] rounded-full bg-white/25" />
          <div className="w-[3px] h-[3px] rounded-full bg-white/25" />
        </div>
        <div className="absolute inset-0 top-[8px] overflow-hidden">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover object-top" />
          ) : (
            <div className="w-full h-full bg-gradient-to-b from-bg-elevated to-bg-base" />
          )}
        </div>
      </div>
      {/* base */}
      <div className="w-[50px] h-[4px] bg-white/10 rounded-b-sm" />
      <div className="w-[70px] h-[2px] bg-white/8 rounded-sm" />
    </div>
  )
}

export function ProjectCard({ project }: Props) {
  const { i18n } = useTranslation()
  const description =
    i18n.language === 'en' && project.descriptionEn
      ? project.descriptionEn
      : project.description

  return (
    <motion.div
      className="flex items-center gap-4 p-4 rounded-xl border border-transparent cursor-default"
      whileHover={{ backgroundColor: 'rgba(22,51,82,0.55)', borderColor: 'rgba(29,233,182,0.12)' }}
      transition={{ duration: 0.2 }}
    >
      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-sans text-[14px] font-bold text-text-primary leading-tight">
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

      {/* Device mockup */}
      {project.platform === 'web' ? (
        <div style={{ transform: 'rotate(6deg)' }} className="flex-shrink-0">
          <MacFrame image={project.image} title={project.title} />
        </div>
      ) : (
        <div style={{ transform: 'rotate(6deg)' }} className="flex-shrink-0">
          <PhoneFrame image={project.image} title={project.title} />
        </div>
      )}
    </motion.div>
  )
}
