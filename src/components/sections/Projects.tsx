import { Link } from 'react-router-dom'
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

      <Link
        to="/archive"
        className="mt-6 text-[11px] font-semibold text-accent/70 hover:text-accent uppercase tracking-[2px] transition-colors flex items-center gap-2 group"
      >
        <span className="h-px w-6 bg-accent/40 group-hover:bg-accent group-hover:w-10 transition-all duration-300" />
        {t('projects.view_all')} ({projects.length})
      </Link>
    </section>
  )
}
