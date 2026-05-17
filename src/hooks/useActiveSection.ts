import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: string[]): string {
  const [active, setActive] = useState(sectionIds[0] ?? '')
  const key = sectionIds.join(',')

  useEffect(() => {
    const ids = key.split(',').filter(Boolean)

    const pick = () => {
      let current = ids[0] ?? ''
      let bestTop = -Infinity
      for (let i = 0; i < ids.length; i++) {
        const el = document.getElementById(ids[i])
        if (!el) continue
        const top = el.getBoundingClientRect().top
        // last section uses full viewport height so it activates even if short/near bottom
        const threshold = i === ids.length - 1 ? window.innerHeight : window.innerHeight * 0.4
        if (top <= threshold && top > bestTop) {
          bestTop = top
          current = ids[i]
        }
      }
      setActive(current)
    }

    pick()
    window.addEventListener('scroll', pick, { passive: true })
    return () => window.removeEventListener('scroll', pick)
  }, [key])

  return active
}
