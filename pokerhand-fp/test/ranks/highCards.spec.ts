import { highCard } from '~/ranks/highCards'
import { Hand } from '~/card'

describe('highCard', () => {
  const hand: Hand = [
    { suit: 'S', face: '5' },
    { suit: 'D', face: '7' },
    { suit: 'S', face: '9' },
    { suit: 'S', face: 'J' },
    { suit: 'S', face: 'A' }
  ]

  describe('matches', () => {
    it('returns true when there is at least one high card', () => {
      expect(highCard(hand).result).toBeTruthy()
    })

    it('shows matched as all high cards sorted by value', () => {
      expect(highCard(hand).matched).toEqual([
        { suit: 'S', face: 'A' },
        { suit: 'S', face: 'J' },
        { suit: 'S', face: '9' },
        { suit: 'D', face: '7' },
        { suit: 'S', face: '5' }
      ])
    })
  })

  describe('unmatched', () => {
    it('returns false when there is no high card', () => {
      expect(highCard([]).result).toBeFalsy()
    })

    it('returns false when it is flush', () => {
      const flush: Hand = [
        { suit: 'D', face: '2' },
        { suit: 'D', face: '5' },
        { suit: 'D', face: '7' },
        { suit: 'D', face: '9' },
        { suit: 'D', face: 'Q' }
      ]

      expect(highCard(flush).result).toBeFalsy()
    })
  })
})
