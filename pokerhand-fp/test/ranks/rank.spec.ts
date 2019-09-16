import { Hand } from '~/card'
import { duel } from '~/duel/duel'

describe('rank', () => {
  const highCard: Hand = [
    { suit: 'S', face: '5' },
    { suit: 'S', face: '7' },
    { suit: 'S', face: '9' },
    { suit: 'S', face: 'J' },
    { suit: 'S', face: 'A' }
  ]

  const pair: Hand = [
    { suit: 'D', face: '2' },
    { suit: 'S', face: '7' },
    { suit: 'S', face: '9' },
    { suit: 'S', face: '2' },
    { suit: 'S', face: '3' }
  ]

  describe('duel', () => {
    describe('uneven ranks', () => {
      it('double wins over high card', () => {
        expect(duel(pair, highCard)).toEqual('Pair: 2')
      })
    })

    describe('even ranks', () => {
      const pair2: Hand = [
        { suit: 'D', face: '2' },
        { suit: 'S', face: '7' },
        { suit: 'S', face: '9' },
        { suit: 'S', face: '2' },
        { suit: 'S', face: 'A' }
      ]

      it('pair2 wins', () => {
        expect(duel(pair, pair2)).toEqual('Pair: A over 9')
      })
    })

    describe('ties', () => {
      it('ties', () => {
        expect(duel(pair, pair)).toEqual('Tie.')
      })
    })
  })
})
