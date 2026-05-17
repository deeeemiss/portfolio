import { useTranslation } from 'react-i18next'

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const lang = i18n.resolvedLanguage ?? i18n.language

  return (
    <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest">
      <button onClick={() => i18n.changeLanguage('it')} className="cursor-pointer">
        <span className={lang === 'it' ? 'text-accent' : 'text-text-primary/55'}>IT</span>
      </button>
      <span className="text-text-primary/25 mx-0.5">|</span>
      <button onClick={() => i18n.changeLanguage('en')} className="cursor-pointer">
        <span className={lang === 'en' ? 'text-accent' : 'text-text-primary/55'}>EN</span>
      </button>
    </div>
  )
}
