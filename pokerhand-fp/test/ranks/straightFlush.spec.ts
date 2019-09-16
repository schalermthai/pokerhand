import { straightFlush } from '~/ranks/straightFlush'
import { Hand } from '~/card'

describe('straightFlush flush', () => {
  describe('matches', () => {
    const hand: Hand = [
      { suit: 'D', face: '2' },
      { suit: 'D', face: '3' },
      { suit: 'D', face: '4' },
      { suit: 'D', face: '5' },
      { suit: 'D', face: '6' }
    ]

    it('returns true when all cards are in sequence and share the same suit', () => {
      expect(straightFlush(hand).result).toBeTruthy()
    })

    it('shows primary as all 5 cards', () => {
      expect(straightFlush(hand).primary).toEqual([
        { suit: 'D', face: '6' },
        { suit: 'D', face: '5' },
        { suit: 'D', face: '4' },
        { suit: 'D', face: '3' },
        { suit: 'D', face: '2' }
      ])
    })

    it('shows secondary as none', () => {
      expect(straightFlush(hand).secondary).toEqual([])
    })
  })

  describe('unmatched', () => {
    it('returns false when one card is not in sequence', () => {
      const hand: Hand = [
        { suit: 'D', face: '2' },
        { suit: 'S', face: '3' },
        { suit: 'S', face: '4' },
        { suit: 'H', face: '5' },
        { suit: 'S', face: '7' }
      ]

      expect(straightFlush(hand).result).toBeFalsy()
    })

    it('returns false when one card is not in the same suit', () => {
      const hand: Hand = [
        { suit: 'D', face: '2' },
        { suit: 'D', face: '3' },
        { suit: 'D', face: '4' },
        { suit: 'D', face: '5' },
        { suit: 'S', face: '6' }
      ]

      expect(straightFlush(hand).result).toBeFalsy()
    })
  })
})
