import { Hand } from '~/Hand'
import { Card, Face, Suit } from '~/Card'

describe('HighCard', () => {
  const h = new Hand([
    new Card(Face._2, Suit.S),
    new Card(Face._7, Suit.C),
    new Card(Face._4, Suit.S),
    new Card(Face._6, Suit.S),
    new Card(Face._8, Suit.S)
  ])

  it('matches as a high card', () => {
    expect(h.rank.name).toEqual('High Card')
  })

  it('does not match straight', () => {
    const h = new Hand([
      new Card(Face._2, Suit.S),
      new Card(Face._3, Suit.C),
      new Card(Face._4, Suit.S),
      new Card(Face._5, Suit.S),
      new Card(Face._6, Suit.S)
    ])

    expect(h.rank.name).not.toEqual('High Card')
  })

  it('does not match flush', () => {
    const h = new Hand([
      new Card(Face._2, Suit.S),
      new Card(Face._7, Suit.S),
      new Card(Face._4, Suit.S),
      new Card(Face._6, Suit.S),
      new Card(Face._8, Suit.S)
    ])

    expect(h.rank.name).not.toEqual('High Card')
  })

  describe('duel', () => {
    const h2 = new Hand([
      new Card(Face._2, Suit.S),
      new Card(Face._7, Suit.C),
      new Card(Face._5, Suit.S),
      new Card(Face._6, Suit.S),
      new Card(Face._8, Suit.S)
    ])

    expect(h2.duel(h)).toEqual('You win: High Card with 5 > 4')
  })
})
