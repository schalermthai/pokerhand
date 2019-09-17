import { Hand } from '~/Hand'
import { Card, Face, Suit } from '~/Card'

describe('Three of a Kind', () => {
  const threeOfAKind1 = new Hand([
    new Card(Face._2, Suit.S),
    new Card(Face._2, Suit.C),
    new Card(Face._2, Suit.D),
    new Card(Face._4, Suit.C),
    new Card(Face._8, Suit.S)
  ])

  it('matches as a three of a kind', () => {
    expect(threeOfAKind1.rank.name).toEqual('Three of a Kind')
  })

  describe('duel', () => {
    const twoPair1 = new Hand([
      new Card(Face._2, Suit.S),
      new Card(Face._2, Suit.C),
      new Card(Face._4, Suit.S),
      new Card(Face._4, Suit.C),
      new Card(Face._8, Suit.S)
    ])

    const threeOfAKind2 = new Hand([
      new Card(Face._3, Suit.S),
      new Card(Face._3, Suit.C),
      new Card(Face._3, Suit.D),
      new Card(Face._4, Suit.C),
      new Card(Face._8, Suit.S)
    ])

    const threeOfAKind3 = new Hand([
      new Card(Face._3, Suit.S),
      new Card(Face._3, Suit.C),
      new Card(Face._3, Suit.D),
      new Card(Face._5, Suit.C),
      new Card(Face._8, Suit.S)
    ])

    it('three of kind > two pairs', () => {
      expect(threeOfAKind1.duel(twoPair1)).toEqual(
        'You win: Three of a Kind > Two Pairs'
      )
    })

    it('three of kind vs three of kind: highest card of three of a kind wins', () => {
      expect(threeOfAKind2.duel(threeOfAKind1)).toEqual(
        'You win: Three of a Kind with 3 > 2'
      )
    })

    it('three of kind vs three of kind: same highest pair, highest high card wins', () => {
      expect(threeOfAKind3.duel(threeOfAKind2)).toEqual(
        'You win: Three of a Kind with 5 > 4'
      )
    })
  })
})
