import { describe, it, expect } from 'vitest'
import { creativeWorks } from '../creativeWork'

describe('creativeWork data', () => {
  it('has at least one entry', () => {
    expect(creativeWorks.length).toBeGreaterThan(0)
  })

  it('every entry has required fields', () => {
    for (const w of creativeWorks) {
      expect(w.id).toBeTruthy()
      expect(w.title).toBeTruthy()
      expect(w.description).toBeTruthy()
      expect(w.descriptionEn).toBeTruthy()
      expect(Array.isArray(w.tags)).toBe(true)
    }
  })

  it('all entries have at least one tag', () => {
    for (const w of creativeWorks) {
      expect(w.tags.length).toBeGreaterThan(0)
    }
  })

  it('ids are unique', () => {
    const ids = creativeWorks.map(w => w.id)
    expect(new Set(ids).size).toBe(ids.length)
  })
})
