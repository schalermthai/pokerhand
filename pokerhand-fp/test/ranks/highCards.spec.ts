import { highCard } from '~/ranks/highCards'
import { Hand } from '~/card'

describe('highCard', () => {
  const hand: Hand = [
    { suit: 'S', face: '5' },
    { suit: 'S', face: '7' },
    { suit: 'S', face: '9' },
    { suit: 'S', face: 'J' },
    { suit: 'S', face: 'A' }
  ]

  describe('matches', () => {
    it('returns true when there is at least one high card', () => {
      expect(highCard(hand).result).toBeTruthy()
    })

    it('shows primary as all high cards sorted by value', () => {
      expect(highCard(hand).primary).toEqual([
        { suit: 'S', face: 'A' },
        { suit: 'S', face: 'J' },
        { suit: 'S', face: '9' },
        { suit: 'S', face: '7' },
        { suit: 'S', face: '5' }
      ])
    })
  })

  describe('unmatched', () => {
    it('returns false when there is no high card', () => {
      expect(highCard([]).result).toBeFalsy()
    })
  })
})
