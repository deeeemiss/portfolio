import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function NotFoundPage() {
  const { i18n } = useTranslation()
  const isEn = i18n.language === 'en'

  return (
    <div className="bg-bg-base min-h-screen flex items-center justify-center px-8">
      <div className="flex flex-col items-start gap-6 max-w-sm">
        <p className="text-[11px] font-bold uppercase tracking-[3px] text-accent">
          404
        </p>
        <h1 className="font-sans text-4xl font-extrabold text-text-primary leading-tight">
          {isEn ? 'Page not found.' : 'Pagina non trovata.'}
        </h1>
        <p className="text-[14px] text-text-primary/45 leading-relaxed">
          {isEn
            ? "The page you're looking for doesn't exist or has been moved."
            : 'La pagina che cerchi non esiste o è stata spostata.'}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[2px] text-accent/70 hover:text-accent transition-colors group mt-2"
        >
          <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform" />
          {isEn ? 'Back to home' : 'Torna alla home'}
        </Link>
      </div>
    </div>
  )
}
