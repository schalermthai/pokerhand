import { Hand } from '~/Hand'
import { Card, Face, Suit } from '~/Card'

describe('Flush', () => {
  const h = new Hand([
    new Card(Face._2, Suit.C),
    new Card(Face._7, Suit.C),
    new Card(Face._4, Suit.C),
    new Card(Face._A, Suit.C),
    new Card(Face._6, Suit.C)
  ])

  it('matches as a flush', () => {
    expect(h.rank().name).toEqual('Flush')
  })
})
