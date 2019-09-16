import { straight } from '~/ranks/straight'
import { Hand } from '~/card'

describe('straight', () => {
  describe('matches', () => {
    const hand: Hand = [
      { suit: 'D', face: '2' },
      { suit: 'S', face: '3' },
      { suit: 'S', face: '4' },
      { suit: 'H', face: '5' },
      { suit: 'S', face: '6' }
    ]

    it('returns true when all cards are in sequence', () => {
      expect(straight(hand).result).toBeTruthy()
    })

    it('shows primary as all 5 cards', () => {
      expect(straight(hand).primary).toEqual([
        { suit: 'S', face: '6' },
        { suit: 'H', face: '5' },
        { suit: 'S', face: '4' },
        { suit: 'S', face: '3' },
        { suit: 'D', face: '2' }
      ])
    })

    it('shows secondary as none', () => {
      expect(straight(hand).secondary).toEqual([])
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

      expect(straight(hand).result).toBeFalsy()
    })
  })
})
