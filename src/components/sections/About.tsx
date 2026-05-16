import { useTranslation } from 'react-i18next'

export function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="scroll-mt-4">
      <h2 className="text-[10px] font-bold uppercase tracking-[3px] text-text-primary/35 mb-7">
        {t('about.title')}
      </h2>
      <div className="space-y-4 text-text-primary/65 leading-relaxed text-[15px]">
        <p>{t('about.bio1')}</p>
        <p>{t('about.bio2')}</p>
      </div>
    </section>
  )
}
