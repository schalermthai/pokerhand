import { Hand } from '~/Hand'
import { Card, Face, Suit } from '~/Card'

describe('Straight', () => {
  const straight1 = new Hand([
    new Card(Face._2, Suit.SPADE),
    new Card(Face._3, Suit.CLUB),
    new Card(Face._4, Suit.DIAMONDS),
    new Card(Face._5, Suit.CLUB),
    new Card(Face._6, Suit.SPADE)
  ])

  it('matches as a straight', () => {
    expect(straight1.rank.name).toEqual('Straight')
  })

  describe('duel', () => {
    const threeOfAKind1 = new Hand([
      new Card(Face._2, Suit.SPADE),
      new Card(Face._2, Suit.CLUB),
      new Card(Face._2, Suit.DIAMONDS),
      new Card(Face._4, Suit.CLUB),
      new Card(Face._8, Suit.SPADE)
    ])

    const straight2 = new Hand([
      new Card(Face._3, Suit.CLUB),
      new Card(Face._4, Suit.DIAMONDS),
      new Card(Face._5, Suit.CLUB),
      new Card(Face._6, Suit.SPADE),
      new Card(Face._7, Suit.SPADE)
    ])

    it('straight > three of a kind', () => {
      expect(straight1.duel(threeOfAKind1)).toEqual(
        'You win: Straight > Three of a Kind'
      )
    })

    it('straight vs straight: highest card of straight wins', () => {
      expect(straight2.duel(straight1)).toEqual('You win: Straight with 7 > 6')
    })
  })
})
