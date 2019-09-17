import { pair } from '~/ranks/pair'
import { Hand } from '~/card'

describe('pair', () => {
  describe('matches', () => {
    const hand: Hand = [
      { suit: 'D', face: '2' },
      { suit: 'S', face: '7' },
      { suit: 'S', face: '9' },
      { suit: 'S', face: '2' },
      { suit: 'S', face: '3' }
    ]

    it('returns true when there is at least one double', () => {
      expect(pair(hand).result).toBeTruthy()
    })

    it('shows matched as the matching double', () => {
      expect(pair(hand).matched).toEqual([
        { suit: 'D', face: '2' },
        { suit: 'S', face: '2' }
      ])
    })

    it('shows unmatched as the single cards', () => {
      expect(pair(hand).unmatched).toEqual([
        { suit: 'S', face: '9' },
        { suit: 'S', face: '7' },
        { suit: 'S', face: '3' }
      ])
    })
  })

  describe('unmatched', () => {
    it('returns false when there is no double', () => {
      const hand: Hand = [
        { suit: 'S', face: '2' },
        { suit: 'S', face: '7' },
        { suit: 'S', face: '9' },
        { suit: 'S', face: 'A' },
        { suit: 'S', face: '3' }
      ]
      expect(pair(hand).result).toBeFalsy()
    })

    it('returns false when there is two pairs', () => {
      const hand: Hand = [
        { suit: 'S', face: '2' },
        { suit: 'D', face: '2' },
        { suit: 'S', face: '9' },
        { suit: 'D', face: '9' },
        { suit: 'S', face: '3' }
      ]

      expect(pair(hand).result).toBeFalsy()
    })
  })
})
