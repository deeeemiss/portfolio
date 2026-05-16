import { describe, it, expect } from 'vitest'
import { experiences } from '../experience'

describe('experience data', () => {
  it('has at least one entry', () => {
    expect(experiences.length).toBeGreaterThan(0)
  })

  it('every entry has required fields', () => {
    for (const e of experiences) {
      expect(e.id).toBeTruthy()
      expect(e.dateRange).toBeTruthy()
      expect(e.role).toBeTruthy()
      expect(e.description).toBeTruthy()
      expect(e.descriptionEn).toBeTruthy()
      expect(Array.isArray(e.tech)).toBe(true)
    }
  })

  it('all entries have at least one tech tag', () => {
    for (const e of experiences) {
      expect(e.tech.length).toBeGreaterThan(0)
    }
  })

  it('ids are unique', () => {
    const ids = experiences.map(e => e.id)
    expect(new Set(ids).size).toBe(ids.length)
  })
})
