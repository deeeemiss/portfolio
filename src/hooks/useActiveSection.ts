import { useEffect, useRef, useState } from 'react'

export function useActiveSection(sectionIds: string[]): string {
  const [active, setActive] = useState(sectionIds[0] ?? '')
  const key = sectionIds.join(',')
  const visibleRef = useRef<Set<string>>(new Set())

  useEffect(() => {
    const ids = key.split(',').filter(Boolean)
    const observers: IntersectionObserver[] = []

    const pickActive = () => {
      // among visible sections, pick the one whose top is closest to (but above) viewport center
      let best: string | null = null
      let bestTop = -Infinity
      for (const id of ids) {
        if (!visibleRef.current.has(id)) continue
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.getBoundingClientRect().top
        if (top <= window.innerHeight * 0.5 && top > bestTop) {
          bestTop = top
          best = id
        }
      }
      if (best) setActive(best)
    }

    for (const id of ids) {
      const el = document.getElementById(id)
      if (!el) continue

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) visibleRef.current.add(id)
          else visibleRef.current.delete(id)
          pickActive()
        },
        { rootMargin: '0px 0px -20% 0px', threshold: 0 },
      )
      observer.observe(el)
      observers.push(observer)
    }

    // activate last section when scrolled to bottom
    const onScroll = () => {
      const atBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 80
      if (atBottom && ids.length > 0) setActive(ids[ids.length - 1])
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observers.forEach(o => o.disconnect())
      window.removeEventListener('scroll', onScroll)
    }
  }, [key])

  return active
}
