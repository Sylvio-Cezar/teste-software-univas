import { describe, it, expect } from 'vitest'
import { canTransition, type Status } from '../../src/utils/taskRules'

describe('canTransition', () => {
  it('permite PENDING -> IN_PROGRESS', () => {
    expect(canTransition('PENDING', 'IN_PROGRESS')).toBe(true)
  })

  it('bloqueia quando origem é COMPLETED ou CANCELLED', () => {
    const blockedFrom: Status[] = ['COMPLETED', 'CANCELLED']
    for (const from of blockedFrom) {
      expect(canTransition(from, 'PENDING')).toBe(false)
      expect(canTransition(from, 'IN_PROGRESS')).toBe(false)
      expect(canTransition(from, 'COMPLETED')).toBe(false)
      expect(canTransition(from, 'CANCELLED')).toBe(false)
    }
  })
})


