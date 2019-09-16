import { Hand } from '~/Hand'
import { Card, Face, Suit } from '~/Card'
import { FourOfAKind } from '~/ranks/FourOfAKind'

describe('Four Of a Kind', () => {
  const h = new Hand([
    new Card(Face._2, Suit.S),
    new Card(Face._2, Suit.C),
    new Card(Face._2, Suit.D),
    new Card(Face._2, Suit.H),
    new Card(Face._8, Suit.S)
  ])

  it('matches as a four of a kind', () => {
    expect(new FourOfAKind().matches(h)).toBeTruthy()
  })
})
