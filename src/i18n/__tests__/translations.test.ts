import { describe, it, expect } from 'vitest'
import it_t from '../it.json'
import en_t from '../en.json'

function leafKeys(obj: object, prefix = ''): string[] {
  return Object.entries(obj).flatMap(([k, v]) =>
    typeof v === 'object' && v !== null
      ? leafKeys(v as object, `${prefix}${k}.`)
      : [`${prefix}${k}`]
  )
}

describe('translations', () => {
  it('IT and EN have identical keys', () => {
    expect(leafKeys(it_t).sort()).toEqual(leafKeys(en_t).sort())
  })

  it('has experience keys', () => {
    expect(it_t.experience.title).toBeDefined()
  })

  it('has creative keys', () => {
    expect(it_t.creative.title).toBeDefined()
  })

  it('has updated nav keys (experience + creative)', () => {
    expect(it_t.nav.experience).toBeDefined()
    expect(it_t.nav.creative).toBeDefined()
  })
})
