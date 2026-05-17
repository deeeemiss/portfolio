import { useTranslation } from 'react-i18next'

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const lang = i18n.resolvedLanguage ?? i18n.language
  const toggle = () => i18n.changeLanguage(lang === 'it' ? 'en' : 'it')

  return (
    <button onClick={toggle} className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest cursor-pointer">
      <span className={lang === 'it' ? 'text-accent' : 'text-text-primary/55'}>IT</span>
      <span className="text-text-primary/25 mx-0.5">|</span>
      <span className={lang === 'en' ? 'text-accent' : 'text-text-primary/55'}>EN</span>
    </button>
  )
}
