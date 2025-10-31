import { describe, it, expect } from 'vitest'
import { z } from 'zod'

const taskInputSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  userId: z.string().min(1, 'User ID is required'),
  description: z.string().optional()
})

describe('taskInputSchema', () => {
  it('valida com sucesso quando dados mínimos estão corretos', () => {
    const data = { title: 'Comprar pão', userId: '123' }
    expect(() => taskInputSchema.parse(data)).not.toThrow()
  })

  it('falha quando campos obrigatórios estão vazios', () => {
    const bad = { title: '', userId: '' }
    expect(() => taskInputSchema.parse(bad)).toThrow()
  })
})


