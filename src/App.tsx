import { useState } from 'react'
import { Sidebar } from './components/layout/Sidebar'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'

export default function App() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  return (
    <div
      className="relative bg-bg-base min-h-screen"
      onMouseMove={e => setMouse({ x: e.clientX, y: e.clientY })}
    >
      {/* Spotlight overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(29,233,182,0.09), transparent 70%)`,
        }}
      />

      {/* Two-column layout */}
      <div className="relative z-10 flex flex-col md:flex-row max-w-[1400px] mx-auto">
        <Sidebar />
        <main className="flex-1 flex flex-col gap-24 px-8 py-16 md:px-12 md:py-24 md:pl-6">
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  )
}
