import { Hand } from '~/Hand'
import { Card, Face, Suit } from '~/Card'
import { StraightFlush } from '~/ranks/StraightFlush'

describe('Straight Flush', () => {
  const h = new Hand([
    new Card(Face._2, Suit.S),
    new Card(Face._3, Suit.S),
    new Card(Face._4, Suit.S),
    new Card(Face._5, Suit.S),
    new Card(Face._6, Suit.S)
  ])

  it('matches as a straight flush', () => {
    expect(new StraightFlush().matches(h)).toBeTruthy()
  })
})
