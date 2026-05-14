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
})
