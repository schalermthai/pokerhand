import { Hand } from '~/Hand'
import { Card, Face, Suit } from '~/Card'

describe('Straight Flush', () => {
  const straightFlush1 = new Hand([
    new Card(Face._2, Suit.S),
    new Card(Face._3, Suit.S),
    new Card(Face._4, Suit.S),
    new Card(Face._5, Suit.S),
    new Card(Face._6, Suit.S)
  ])

  it('matches as a straight flush', () => {
    expect(straightFlush1.rank.name).toEqual('Straight Flush')
  })

  describe('duel', () => {
    const fourOfKind1 = new Hand([
      new Card(Face._2, Suit.S),
      new Card(Face._2, Suit.C),
      new Card(Face._2, Suit.D),
      new Card(Face._2, Suit.H),
      new Card(Face._8, Suit.S)
    ])

    const straightFlush2 = new Hand([
      new Card(Face._3, Suit.S),
      new Card(Face._4, Suit.S),
      new Card(Face._5, Suit.S),
      new Card(Face._6, Suit.S),
      new Card(Face._7, Suit.S)
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
