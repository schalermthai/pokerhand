import { Hand } from '~/Hand'
import { Card, Face, Suit } from '~/Card'

describe('Full House', () => {
  const h = new Hand([
    new Card(Face._2, Suit.S),
    new Card(Face._2, Suit.C),
    new Card(Face._2, Suit.D),
    new Card(Face._4, Suit.C),
    new Card(Face._4, Suit.S)
  ])

  it('matches as a full house', () => {
    expect(h.rank().name).toEqual('Full House')
  })
})
