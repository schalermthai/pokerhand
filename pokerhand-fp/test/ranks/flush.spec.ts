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

    it('shows primary as all cards that share the same suit', () => {
      expect(flush(hand).primary).toEqual([
        { suit: 'D', face: 'Q' },
        { suit: 'D', face: '9' },
        { suit: 'D', face: '7' },
        { suit: 'D', face: '5' },
        { suit: 'D', face: '2' }
      ])
    })

    it('shows secondary as none', () => {
      expect(flush(hand).secondary).toEqual([])
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
