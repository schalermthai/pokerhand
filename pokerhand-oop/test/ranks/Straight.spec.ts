import { Hand } from '~/Hand'
import { Card, Face, Suit } from '~/Card'
import { Straight } from '~/ranks/Straight'

describe('Straight', () => {
  const h = new Hand([
    new Card(Face._2, Suit.S),
    new Card(Face._3, Suit.C),
    new Card(Face._4, Suit.D),
    new Card(Face._5, Suit.C),
    new Card(Face._6, Suit.S)
  ])

  it('matches as a straight', () => {
    expect(new Straight().matches(h)).toBeTruthy()
  })
})
