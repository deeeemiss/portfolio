import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { projects } from '../data/projects'

export function ArchivePage() {
  const { t, i18n } = useTranslation()
  const isEn = i18n.language === 'en'

  return (
    <div className="bg-bg-base min-h-screen px-8 py-16 max-w-[1400px] mx-auto">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[2px] text-text-primary/45 hover:text-accent transition-colors mb-12 group"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        {t('archive.back')}
      </Link>

      <h1 className="font-sans text-4xl md:text-5xl font-bold text-text-primary mb-3">
        {t('archive.title')}
      </h1>
      <p className="text-text-primary/40 text-sm mb-16">{t('archive.subtitle')}</p>

      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left">
            <th className="text-[10px] font-bold uppercase tracking-[2px] text-text-primary/30 pb-4 pr-6 w-16">{t('archive.col_year')}</th>
            <th className="text-[10px] font-bold uppercase tracking-[2px] text-text-primary/30 pb-4 pr-6">{t('archive.col_project')}</th>
            <th className="text-[10px] font-bold uppercase tracking-[2px] text-text-primary/30 pb-4 pr-6 hidden md:table-cell">{t('archive.col_made_at')}</th>
            <th className="text-[10px] font-bold uppercase tracking-[2px] text-text-primary/30 pb-4 pr-6 hidden sm:table-cell">{t('archive.col_built_with')}</th>
            <th className="text-[10px] font-bold uppercase tracking-[2px] text-text-primary/30 pb-4">{t('archive.col_link')}</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr
              key={project.id}
              className="border-t border-text-primary/8 group hover:bg-bg-surface/40 transition-colors"
            >
              <td className="py-4 pr-6 text-[13px] font-semibold text-text-primary/30 align-top">
                {project.year}
              </td>
              <td className="py-4 pr-6 align-top">
                <span className="text-[14px] font-semibold text-text-primary group-hover:text-accent transition-colors leading-snug">
                  {project.title}
                </span>
                <p className="text-[12px] text-text-primary/40 mt-1 leading-relaxed max-w-sm">
                  {isEn ? (project.descriptionEn ?? project.description) : project.description}
                </p>
              </td>
              <td className="py-4 pr-6 text-[13px] text-text-primary/45 align-top hidden md:table-cell whitespace-nowrap">
                {project.madeAt ?? '—'}
              </td>
              <td className="py-4 pr-6 align-top hidden sm:table-cell">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map(tag => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold text-accent bg-accent/7 border border-accent/22 rounded-full px-2.5 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </td>
              <td className="py-4 align-top">
                {(() => {
                  const url = project.link ?? project.links?.website ?? project.links?.appStore ?? project.links?.playStore
                  return url ? (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[12px] text-text-primary/45 hover:text-accent transition-colors"
                    >
                      <ExternalLink size={13} />
                    </a>
                  ) : (
                    <span className="text-text-primary/20 text-[13px]">—</span>
                  )
                })()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
