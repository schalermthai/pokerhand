import { Hand } from '~/Hand'
import { Card, Face, Suit } from '~/Card'

describe('Three of a Kind', () => {
  const h = new Hand([
    new Card(Face._2, Suit.S),
    new Card(Face._2, Suit.C),
    new Card(Face._2, Suit.D),
    new Card(Face._4, Suit.C),
    new Card(Face._8, Suit.S)
  ])

  it('matches as a three of a kind', () => {
    expect(h.rank().name).toEqual('Three of a Kind')
  })
})
