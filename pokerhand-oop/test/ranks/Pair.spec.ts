import { Hand } from '~/Hand'
import { Card, Face, Suit } from '~/Card'

describe('Pair', () => {
  const h = new Hand([
    new Card(Face._2, Suit.S),
    new Card(Face._2, Suit.C),
    new Card(Face._4, Suit.S),
    new Card(Face._6, Suit.S),
    new Card(Face._8, Suit.S)
  ])

  it('matches as a pair', () => {
    expect(h.rank.name).toEqual('Pair')
  })
})
