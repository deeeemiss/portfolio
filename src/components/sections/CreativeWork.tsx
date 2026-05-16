import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { creativeWorks } from '../../data/creativeWork'

export function CreativeWork() {
  const { t, i18n } = useTranslation()
  const isEn = i18n.language === 'en'

  return (
    <section id="creative" className="scroll-mt-4">
      <h2 className="text-[10px] font-bold uppercase tracking-[3px] text-text-primary/35 mb-7">
        {t('creative.title')}
      </h2>

      <div className="flex flex-col gap-1">
        {creativeWorks.map(work => (
          <motion.div
            key={work.id}
            className="p-4 rounded-xl border border-transparent cursor-default"
            whileHover={{ backgroundColor: 'rgba(22,51,82,0.55)', borderColor: 'rgba(29,233,182,0.12)' }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-[14px] font-semibold text-text-primary">
              {work.title}
            </h3>
            <p className="text-[13px] text-text-primary/55 leading-relaxed mt-1.5">
              {isEn ? work.descriptionEn : work.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {work.tags.map(tag => (
                <span
                  key={tag}
                  className="text-[11px] font-semibold text-accent bg-accent/7 border border-accent/22 rounded-full px-3 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
