import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { ProjectCard } from '../ui/ProjectCard'
import { projects } from '../../data/projects'

const VISIBLE_COUNT = 3

export function Projects() {
  const { t } = useTranslation()
  const visible = projects.slice(0, VISIBLE_COUNT)

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

      <div className="mt-6 flex flex-wrap gap-6">
        <Link
          to="/archive"
          className="inline-flex items-center gap-2 text-[11px] font-semibold text-accent/70 hover:text-accent uppercase tracking-[2px] transition-colors group"
        >
          {t('projects.view_all')}
          <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
        </Link>
        <a
          href="https://github.com/deeeemiss"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[11px] font-semibold text-accent/70 hover:text-accent uppercase tracking-[2px] transition-colors group"
        >
          {t('projects.view_github')}
          <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </section>
  )
}
