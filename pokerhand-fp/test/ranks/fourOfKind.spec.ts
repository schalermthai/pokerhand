import { fourOfKind } from '~/ranks/fourOfKind'
import { Hand } from '~/card'

describe('four of kind', () => {
  describe('matches', () => {
    const hand: Hand = [
      { suit: 'D', face: '2' },
      { suit: 'S', face: '2' },
      { suit: 'C', face: '2' },
      { suit: 'H', face: '2' },
      { suit: 'S', face: '3' }
    ]

    it('returns true when there is a four of kind', () => {
      expect(fourOfKind(hand).result).toBeTruthy()
    })

    it('shows primary as all four of kind', () => {
      expect(fourOfKind(hand).primary).toEqual([
        { suit: 'D', face: '2' },
        { suit: 'S', face: '2' },
        { suit: 'C', face: '2' },
        { suit: 'H', face: '2' }
      ])
    })

    it('shows secondary as single card', () => {
      expect(fourOfKind(hand).secondary).toEqual([{ suit: 'S', face: '3' }])
    })
  })

  describe('unmatched', () => {
    it('returns false when there is three of kind', () => {
      const hand: Hand = [
        { suit: 'S', face: '2' },
        { suit: 'D', face: '2' },
        { suit: 'S', face: '9' },
        { suit: 'D', face: '9' },
        { suit: 'H', face: '9' }
      ]

      expect(fourOfKind(hand).result).toBeFalsy()
    })
  })
})
