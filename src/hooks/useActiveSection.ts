import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: string[]): string {
  const [active, setActive] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (!el) continue

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { threshold: 0.3 },
      )
      observer.observe(el)
      observers.push(observer)
    }

    return () => observers.forEach(o => o.disconnect())
  }, [sectionIds])

  return active
}
