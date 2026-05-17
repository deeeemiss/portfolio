import { useTranslation } from 'react-i18next'

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const toggle = () => i18n.changeLanguage(i18n.language === 'it' ? 'en' : 'it')

  return (
    <button onClick={toggle} className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest cursor-pointer">
      <span className={i18n.language === 'it' ? 'text-accent' : 'text-text-primary/55'}>IT</span>
      <span className="text-text-primary/25 mx-0.5">|</span>
      <span className={i18n.language === 'en' ? 'text-accent' : 'text-text-primary/55'}>EN</span>
    </button>
  )
}
