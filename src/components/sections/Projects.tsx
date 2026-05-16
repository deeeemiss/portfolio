import { useTranslation } from 'react-i18next'
import { ProjectCard } from '../ui/ProjectCard'
import { projects } from '../../data/projects'

export function Projects() {
  const { t } = useTranslation()

  return (
    <section id="projects" className="scroll-mt-4">
      <h2 className="text-[10px] font-bold uppercase tracking-[3px] text-text-primary/35 mb-7">
        {t('projects.title')}
      </h2>

      <div className="flex flex-col gap-1">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
