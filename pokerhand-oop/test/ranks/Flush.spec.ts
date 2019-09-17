import { Hand } from '~/Hand'
import { Card, Face, Suit } from '~/Card'

describe('Flush', () => {
  const flush1 = new Hand([
    new Card(Face._2, Suit.C),
    new Card(Face._7, Suit.C),
    new Card(Face._4, Suit.C),
    new Card(Face._A, Suit.C),
    new Card(Face._6, Suit.C)
  ])

  it('matches as a flush', () => {
    expect(flush1.rank.name).toEqual('Flush')
  })

  describe('duel', () => {
    const straight1 = new Hand([
      new Card(Face._2, Suit.S),
      new Card(Face._3, Suit.C),
      new Card(Face._4, Suit.D),
      new Card(Face._5, Suit.C),
      new Card(Face._6, Suit.S)
    ])

    const flush2 = new Hand([
      new Card(Face._3, Suit.C),
      new Card(Face._7, Suit.C),
      new Card(Face._4, Suit.C),
      new Card(Face._A, Suit.C),
      new Card(Face._6, Suit.C)
    ])

    it('flush > straight', () => {
      expect(flush1.duel(straight1)).toEqual('You win: Flush > Straight')
    })

    it('flush vs flush: highest card of flush wins', () => {
      expect(flush2.duel(flush1)).toEqual('You win: Flush with 3 > 2')
    })
  })
})
