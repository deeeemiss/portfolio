import { useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { Download } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const VALID_TOKEN = import.meta.env.VITE_CV_TOKEN

export function CvPage() {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const { i18n } = useTranslation()
  const isEn = i18n.language === 'en'

  useEffect(() => {
    if (!VALID_TOKEN || params.get('key') !== VALID_TOKEN) {
      navigate('/404', { replace: true })
    }
  }, [params, navigate])

  if (!VALID_TOKEN || params.get('key') !== VALID_TOKEN) return null

  return (
    <div className="bg-bg-base min-h-screen flex items-center justify-center px-8">
      <div className="flex flex-col items-center gap-8 text-center">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[3px] text-accent mb-3">
            Curriculum Vitae
          </p>
          <h1 className="font-sans text-3xl font-extrabold text-text-primary">
            Sebastiano Demichelis
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/cv-it.pdf"
            download="Sebastiano_Demichelis_CV_IT.pdf"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg border border-accent/30 text-accent hover:bg-accent/8 transition-colors text-[13px] font-semibold"
          >
            <Download size={14} />
            {isEn ? 'Italian version' : 'Versione italiana'}
          </a>
          <a
            href="/cv-en.pdf"
            download="Sebastiano_Demichelis_CV_EN.pdf"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg border border-accent/30 text-accent hover:bg-accent/8 transition-colors text-[13px] font-semibold"
          >
            <Download size={14} />
            {isEn ? 'English version' : 'Versione inglese'}
          </a>
        </div>

        <p className="text-[12px] text-text-primary/30">
          {isEn ? 'This link is private — please do not share it.' : 'Questo link è privato — non condividerlo.'}
        </p>
      </div>
    </div>
  )
}
