import { flush } from '~/ranks/flush'
import { Hand } from '~/card'

describe('flush', () => {
  describe('matches', () => {
    const hand: Hand = [
      { suit: 'D', face: '2' },
      { suit: 'D', face: '5' },
      { suit: 'D', face: '7' },
      { suit: 'D', face: '9' },
      { suit: 'D', face: 'Q' }
    ]

    it('returns true when all cards share the same suit', () => {
      expect(flush(hand).result).toBeTruthy()
    })

    it('shows matched as all cards that share the same suit', () => {
      expect(flush(hand).matched).toEqual([
        { suit: 'D', face: 'Q' },
        { suit: 'D', face: '9' },
        { suit: 'D', face: '7' },
        { suit: 'D', face: '5' },
        { suit: 'D', face: '2' }
      ])
    })

    it('shows unmatched as none', () => {
      expect(flush(hand).unmatched).toEqual([])
    })
  })

  describe('unmatched', () => {
    it('returns false when one card is not in a same suit', () => {
      const hand: Hand = [
        { suit: 'D', face: '2' },
        { suit: 'D', face: '5' },
        { suit: 'D', face: '7' },
        { suit: 'D', face: '9' },
        { suit: 'S', face: 'Q' }
      ]

      expect(flush(hand).result).toBeFalsy()
    })
  })
})
