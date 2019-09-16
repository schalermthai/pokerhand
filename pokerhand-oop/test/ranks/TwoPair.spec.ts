import { Hand } from '~/Hand'
import { Card, Face, Suit } from '~/Card'
import { TwoPairs } from '~/ranks/TwoPairs'

describe('Two Pairs', () => {
  const h = new Hand([
    new Card(Face._2, Suit.S),
    new Card(Face._2, Suit.C),
    new Card(Face._4, Suit.S),
    new Card(Face._4, Suit.C),
    new Card(Face._8, Suit.S)
  ])

  it('matches as two pairs', () => {
    expect(new TwoPairs().matches(h)).toBeTruthy()
  })
})
