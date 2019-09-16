import { threeOfKind } from '~/ranks/threeOfKind'
import { Hand } from '~/card'

describe('three of kind', () => {
  describe('matches', () => {
    const hand: Hand = [
      { suit: 'D', face: '2' },
      { suit: 'S', face: '2' },
      { suit: 'S', face: '9' },
      { suit: 'H', face: '2' },
      { suit: 'S', face: '3' }
    ]

    it('returns true when there is at least one three of kind', () => {
      expect(threeOfKind(hand).result).toBeTruthy()
    })

    it('shows primary as three of kind cards', () => {
      expect(threeOfKind(hand).primary).toEqual([
        { suit: 'D', face: '2' },
        { suit: 'S', face: '2' },
        { suit: 'H', face: '2' }
      ])
    })

    it('shows secondary as single cards sorted by value', () => {
      expect(threeOfKind(hand).secondary).toEqual([
        { suit: 'S', face: '9' },
        { suit: 'S', face: '3' }
      ])
    })
  })

  describe('unmatched', () => {
    it('returns false when there is no three of kind', () => {
      const hand: Hand = [
        { suit: 'S', face: '2' },
        { suit: 'S', face: '7' },
        { suit: 'S', face: '9' },
        { suit: 'S', face: 'A' },
        { suit: 'S', face: '3' }
      ]

      expect(threeOfKind(hand).result).toBeFalsy()
    })

    it('returns false when there is three of kind with a double', () => {
      const hand: Hand = [
        { suit: 'S', face: '2' },
        { suit: 'D', face: '2' },
        { suit: 'S', face: '9' },
        { suit: 'D', face: '9' },
        { suit: 'H', face: '9' }
      ]

      expect(threeOfKind(hand).result).toBeFalsy()
    })
  })
})
