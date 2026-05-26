import { useRef, useCallback } from 'react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'
import { Sidebar } from './components/layout/Sidebar'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'

export default function App() {
  const spotlightRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (spotlightRef.current) {
      spotlightRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(29,233,182,0.09), transparent 70%)`
    }
  }, [])

  return (
    <>
      <div
        className="relative bg-bg-base min-h-screen"
        onMouseMove={handleMouseMove}
      >
        {/* Spotlight overlay */}
        <div
          ref={spotlightRef}
          className="pointer-events-none fixed inset-0 z-0"
        />

        {/* Two-column layout */}
        <div className="relative z-10 flex flex-col md:flex-row max-w-[1400px] mx-auto">
          <Sidebar />
          <main className="flex-1 flex flex-col gap-24 px-8 py-16 md:px-12 md:py-24 md:pl-6">
            <About />
            <Experience />
            <Projects />
            <Contact />
            <footer className="text-text-primary/30 text-xs pb-4">
              Designed &amp; built by Sebastiano Demichelis. Inspired by{' '}
              <a
                href="https://brittanychiang.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-200"
              >
                Brittany Chiang
              </a>
              .
            </footer>
          </main>
        </div>
      </div>
      <SpeedInsights />
      <Analytics />
    </>
  )
}
