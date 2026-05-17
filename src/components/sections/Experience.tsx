import { motion } from 'framer-motion'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { experiences } from '../../data/experience'

export function Experience() {
  const { t, i18n } = useTranslation()
  const isEn = i18n.language === 'en'

  return (
    <section id="experience" className="scroll-mt-4">
      <h2 className="text-[10px] font-bold uppercase tracking-[3px] text-text-primary/35 mb-7">
        {t('experience.title')}
      </h2>

      <div className="flex flex-col gap-1">
        {experiences.map(exp => (
          <motion.div
            key={exp.id}
            className="flex flex-col md:flex-row gap-1 md:gap-6 p-4 rounded-xl border border-transparent cursor-default"
            whileHover={{ backgroundColor: 'rgba(22,51,82,0.55)', borderColor: 'rgba(29,233,182,0.12)' }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-[10px] font-semibold uppercase tracking-[1px] text-text-primary/30 md:min-w-[110px] md:pt-0.5 flex-shrink-0">
              {exp.dateRange}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 text-[15px] font-semibold text-text-primary flex-wrap">
                <span>{exp.role}</span>
                {exp.company && (
                  <>
                    <span className="text-text-primary/40">·</span>
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-primary hover:text-accent transition-colors inline-flex items-center gap-1 group"
                      >
                        {exp.company}
                        <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                      </a>
                    ) : (
                      <span>{exp.company}</span>
                    )}
                  </>
                )}
              </div>

              <p className="text-[13px] text-text-primary/55 leading-relaxed mt-1.5">
                {isEn ? exp.descriptionEn : exp.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {exp.tech.map(tag => (
                  <span
                    key={tag}
                    className="text-[11px] font-semibold text-accent bg-accent/7 border border-accent/22 rounded-full px-3 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <a
        href={isEn ? '/cv-en.pdf' : '/cv-it.pdf'}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold text-accent/70 hover:text-accent uppercase tracking-[2px] transition-colors group"
      >
        {t('experience.view_cv')}
        <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>
    </section>
  )
}
