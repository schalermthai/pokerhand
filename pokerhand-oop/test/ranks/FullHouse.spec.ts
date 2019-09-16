import { Hand } from '~/Hand'
import { Card, Face, Suit } from '~/Card'
import { FullHouse } from '~/ranks/FullHouse'

describe('Full House', () => {
  const h = new Hand([
    new Card(Face._2, Suit.S),
    new Card(Face._2, Suit.C),
    new Card(Face._2, Suit.D),
    new Card(Face._4, Suit.C),
    new Card(Face._4, Suit.S)
  ])

  it('matches as a full house', () => {
    expect(new FullHouse().matches(h)).toBeTruthy()
  })
})
