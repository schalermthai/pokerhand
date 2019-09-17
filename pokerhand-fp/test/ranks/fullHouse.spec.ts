import { fullHouse } from '~/ranks/fullHouse'
import { Hand } from '~/card'

describe('full house', () => {
  describe('matches', () => {
    const hand: Hand = [
      { suit: 'S', face: '2' },
      { suit: 'D', face: '2' },
      { suit: 'S', face: '9' },
      { suit: 'D', face: '9' },
      { suit: 'H', face: '9' }
    ]

    it('returns true when there is three of kind with a double', () => {
      expect(fullHouse(hand).result).toBeTruthy()
    })

    it('shows matched as three of kind cards', () => {
      expect(fullHouse(hand).matched).toEqual([
        { suit: 'S', face: '9' },
        { suit: 'D', face: '9' },
        { suit: 'H', face: '9' }
      ])
    })

    it('shows unmatched as the double card', () => {
      expect(fullHouse(hand).unmatched).toEqual([
        { suit: 'S', face: '2' },
        { suit: 'D', face: '2' }
      ])
    })
  })

  describe('unmatched', () => {
    it('returns false when there is only three of kind with no double', () => {
      const hand: Hand = [
        { suit: 'S', face: '2' },
        { suit: 'D', face: '3' },
        { suit: 'S', face: '9' },
        { suit: 'D', face: '9' },
        { suit: 'H', face: '9' }
      ]

      expect(fullHouse(hand).result).toBeFalsy()
    })
  })
})
