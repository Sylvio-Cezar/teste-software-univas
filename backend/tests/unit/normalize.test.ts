import { describe, it, expect } from 'vitest'
import { normalizeName } from '../../src/utils/normalize'

describe('normalizeName', () => {
  it('converte para minúsculas e remove espaços extras', () => {
    expect(normalizeName('  OlA   MuNdO  ')).toBe('ola mundo')
  })

  it('retorna string vazia quando entrada é string vazia', () => {
    expect(normalizeName('')).toBe('')
  })
})


