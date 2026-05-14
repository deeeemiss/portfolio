import { describe, it, expect } from 'vitest'
import { projects } from '../projects'

describe('projects data', () => {
  it('every project has required fields', () => {
    projects.forEach(p => {
      expect(p.id, `${p.id} missing id`).toBeTruthy()
      expect(p.title, `${p.id} missing title`).toBeTruthy()
      expect(p.description, `${p.id} missing description`).toBeTruthy()
      expect(['dev', 'creative']).toContain(p.category)
    })
  })

  it('project ids are unique', () => {
    const ids = projects.map(p => p.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('dev projects have tech array', () => {
    projects.filter(p => p.category === 'dev').forEach(p => {
      expect(Array.isArray(p.tech)).toBe(true)
      expect(p.tech!.length).toBeGreaterThan(0)
    })
  })
})
