import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: string[]): string {
  const [active, setActive] = useState(sectionIds[0] ?? '')
  const key = sectionIds.join(',')

  useEffect(() => {
    const ids = key.split(',').filter(Boolean)
    const observers: IntersectionObserver[] = []

    for (const id of ids) {
      const el = document.getElementById(id)
      if (!el) continue

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: '0px 0px -60% 0px', threshold: 0 },
      )
      observer.observe(el)
      observers.push(observer)
    }

    return () => observers.forEach(o => o.disconnect())
  }, [key])

  return active
}
