import { useTranslation } from 'react-i18next'
import { AnimatedSection } from '../ui/AnimatedSection'

const FACTS = [
  { value: '5+', labelIt: 'anni di esperienza', labelEn: 'years of experience' },
  { value: '3', labelIt: 'stack frontend', labelEn: 'frontend stacks' },
  { value: '2', labelIt: 'linguaggi backend', labelEn: 'backend languages' },
  { value: '∞', labelIt: 'curiosità', labelEn: 'curiosity' },
]

export function About() {
  const { t, i18n } = useTranslation()
  const isEn = i18n.language === 'en'

  return (
    <section id="about" className="py-28 bg-bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="font-serif italic text-4xl text-text-primary mb-16">{t('about.title')}</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <AnimatedSection delay={0.1}>
            <div className="space-y-5 text-text-primary/60 leading-relaxed text-base">
              <p>{t('about.bio1')}</p>
              <p>{t('about.bio2')}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {FACTS.map(f => (
                <div key={f.value} className="bg-bg-elevated rounded-xl p-5">
                  <div className="font-serif italic text-3xl font-bold text-accent mb-1">{f.value}</div>
                  <div className="text-xs text-text-primary/50 uppercase tracking-wider leading-tight">
                    {isEn ? f.labelEn : f.labelIt}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
