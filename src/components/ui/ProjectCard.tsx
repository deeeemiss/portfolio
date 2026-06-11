import { motion } from 'framer-motion'
import { ExternalLink, Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import type { Project, ProjectLinks } from '../../data/projects'

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  )
}

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
      <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function StoreLinks({ links }: { links: ProjectLinks }) {
  const items = [
    { key: 'appStore', href: links.appStore, icon: <AppleIcon />, label: 'App Store' },
    { key: 'playStore', href: links.playStore, icon: <GooglePlayIcon />, label: 'Google Play' },
    { key: 'website', href: links.website, icon: <Globe size={15} />, label: links.website ? new URL(links.website).hostname : 'Website' },
    { key: 'github', href: links.github, icon: <GitHubIcon />, label: 'GitHub' },
  ].filter(({ href }) => href !== undefined)

  if (items.length === 0) return null

  return (
    <div className="flex flex-wrap gap-3 mt-3">
      {items.map(({ key, href, icon, label }) =>
        href ? (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[12px] text-accent hover:text-accent/80 transition-colors"
          >
            {icon}
            <span>{label}</span>
          </a>
        ) : (
          <span key={key} className="flex items-center gap-1.5 text-[12px] text-text-primary/25 cursor-not-allowed select-none">
            {icon}
            <span>{label}</span>
          </span>
        )
      )}
    </div>
  )
}

interface Props {
  project: Project
}

function PhoneFrame({ image, title }: { image?: string; title: string }) {
  return (
    <div className="relative flex-shrink-0 w-[72px] h-[156px] rounded-[14px] border-2 border-white/15 bg-bg-elevated overflow-hidden shadow-md">
      <div className="absolute top-[7px] left-1/2 -translate-x-1/2 w-[14px] h-[3px] rounded-full bg-white/20 z-10" />
      <div className="absolute inset-0 top-[16px] bottom-[12px] overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover object-top" />
        ) : (
          <div className="w-full h-full bg-gradient-to-b from-bg-elevated to-bg-base" />
        )}
      </div>
      <div className="absolute bottom-[5px] left-1/2 -translate-x-1/2 w-[18px] h-[2px] rounded-full bg-white/20 z-10" />
    </div>
  )
}

function MacFrame({ image, title }: { image?: string; title: string }) {
  return (
    <div className="flex-shrink-0 flex flex-col items-center">
      {/* display body */}
      <div className="relative w-[120px] rounded-[5px] border border-white/20 bg-bg-elevated shadow-lg overflow-hidden" style={{ paddingBottom: 0 }}>
        {/* top bezel + camera */}
        <div className="flex items-center justify-center h-[6px] bg-white/5">
          <div className="w-[3px] h-[3px] rounded-full bg-white/30" />
        </div>
        {/* screen */}
        <div className="h-[67px] overflow-hidden">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover object-top" />
          ) : (
            <div className="w-full h-full bg-gradient-to-b from-bg-elevated to-bg-base" />
          )}
        </div>
        {/* chin */}
        <div className="h-[10px] bg-white/5" />
      </div>
      {/* neck */}
      <div className="w-[10px] h-[14px] bg-white/10" />
      {/* foot */}
      <div className="w-[50px] h-[3px] rounded-full bg-white/15" />
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
        {/* App icon — only when provided */}
        {project.icon && (
          <div className="w-[40px] h-[40px] rounded-[10px] overflow-hidden mb-2">
            <img src={project.icon} alt={project.title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-sans text-[14px] font-bold text-text-primary leading-tight">
              {project.title}
            </h3>
            {project.links && Object.values(project.links).every(v => v === null) && (
              <span className="text-[10px] font-semibold tracking-wide text-accent/70 border border-accent/30 rounded-full px-2 py-0.5 leading-none">
                coming soon
              </span>
            )}
          </div>
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
        {project.links && <StoreLinks links={project.links} />}
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
