import { twoPairs } from '~/ranks/twoPairs'
import { Hand } from '~/card'

describe('two pairs', () => {
  describe('matches', () => {
    const hand: Hand = [
      { suit: 'D', face: '2' },
      { suit: 'S', face: '2' },
      { suit: 'S', face: '9' },
      { suit: 'H', face: '9' },
      { suit: 'S', face: '3' }
    ]

    it('returns true when there is 2 pairs', () => {
      expect(twoPairs(hand).result).toBeTruthy()
    })

    it('shows matching pairs in the matched', () => {
      expect(twoPairs(hand).matched).toEqual([
        { suit: 'S', face: '9' },
        { suit: 'H', face: '9' },
        { suit: 'D', face: '2' },
        { suit: 'S', face: '2' }
      ])
    })

    it('shows unmatched single cards in the unmatched', () => {
      expect(twoPairs(hand).unmatched).toEqual([{ suit: 'S', face: '3' }])
    })
  })

  describe('unmatched', () => {
    const hand: Hand = [
      { suit: 'S', face: '2' },
      { suit: 'D', face: '2' },
      { suit: 'S', face: '9' },
      { suit: 'D', face: '9' },
      { suit: 'H', face: '9' }
    ]

    it('returns false when there is three of kind with a double', () => {
      expect(twoPairs([]).result).toBeFalsy()
    })
  })
})
