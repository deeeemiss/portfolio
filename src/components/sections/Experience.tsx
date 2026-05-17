import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
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
          <motion.a
            key={exp.id}
            href={exp.companyUrl ?? undefined}
            target={exp.companyUrl ? '_blank' : undefined}
            rel={exp.companyUrl ? 'noopener noreferrer' : undefined}
            className="group flex flex-col md:flex-row gap-1 md:gap-6 p-4 rounded-xl border border-transparent cursor-pointer"
            whileHover={{ backgroundColor: 'rgba(22,51,82,0.55)', borderColor: 'rgba(29,233,182,0.12)' }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-[10px] font-semibold uppercase tracking-[1px] text-text-primary/30 md:w-[152px] md:min-w-[152px] md:pt-0.5 flex-shrink-0 flex flex-col gap-2">
              <span>{isEn && exp.dateRangeEn ? exp.dateRangeEn : exp.dateRange}</span>
              {exp.logoUrl && (
                <img
                  src={exp.logoUrl}
                  alt={exp.company}
                  className="h-5 w-auto object-contain object-left opacity-30 group-hover:opacity-55 transition-opacity duration-200"
                  style={
                    exp.logoUrl.endsWith('.svg')
                      ? { filter: 'brightness(0) invert(1)' }
                      : { mixBlendMode: 'screen' as const }
                  }
                />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 text-[15px] font-semibold text-text-primary flex-wrap">
                <span>{exp.role}</span>
                {exp.company && (
                  <>
                    <span className="text-text-primary/40">·</span>
                    <span className="inline-flex items-center gap-1">
                        {exp.company}
                        {exp.companyUrl && (
                          <ArrowUpRight
                            size={12}
                            className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 text-accent"
                          />
                        )}
                      </span>
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
          </motion.a>
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
