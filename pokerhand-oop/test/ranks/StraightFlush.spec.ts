import { Hand } from '~/Hand'
import { Card, Face, Suit } from '~/Card'

describe('Straight Flush', () => {
  const straightFlush1 = new Hand([
    new Card(Face._2, Suit.SPADE),
    new Card(Face._3, Suit.SPADE),
    new Card(Face._4, Suit.SPADE),
    new Card(Face._5, Suit.SPADE),
    new Card(Face._6, Suit.SPADE)
  ])

  it('matches as a straight flush', () => {
    expect(straightFlush1.rank.name).toEqual('Straight Flush')
  })

  describe('duel', () => {
    const fourOfKind1 = new Hand([
      new Card(Face._2, Suit.SPADE),
      new Card(Face._2, Suit.CLUB),
      new Card(Face._2, Suit.DIAMONDS),
      new Card(Face._2, Suit.HEART),
      new Card(Face._8, Suit.SPADE)
    ])

    const straightFlush2 = new Hand([
      new Card(Face._3, Suit.SPADE),
      new Card(Face._4, Suit.SPADE),
      new Card(Face._5, Suit.SPADE),
      new Card(Face._6, Suit.SPADE),
      new Card(Face._7, Suit.SPADE)
    ])

    it('straight flush > four of kind', () => {
      expect(straightFlush1.duel(fourOfKind1)).toEqual(
        'You win: Straight Flush > Four of a Kind'
      )
    })

    it('straight flush vs straight flush: highest card of straight flush wins', () => {
      expect(straightFlush2.duel(straightFlush1)).toEqual(
        'You win: Straight Flush with 7 > 6'
      )
    })
  })
})
