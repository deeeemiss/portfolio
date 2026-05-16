import { describe, it, expect } from 'vitest'
import { projects } from '../projects'

describe('projects data', () => {
  it('has at least one project', () => {
    expect(projects.length).toBeGreaterThan(0)
  })

  it('every project has required fields', () => {
    for (const p of projects) {
      expect(p.id).toBeTruthy()
      expect(p.title).toBeTruthy()
      expect(p.description).toBeTruthy()
      expect(Array.isArray(p.tech)).toBe(true)
    }
  })

  it('all projects have at least one tech tag', () => {
    for (const p of projects) {
      expect(p.tech.length).toBeGreaterThan(0)
    }
  })
})
