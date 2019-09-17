import { Hand } from '~/Hand'
import { Card, Face, Suit } from '~/Card'

describe('Straight', () => {
  const straight1 = new Hand([
    new Card(Face._2, Suit.S),
    new Card(Face._3, Suit.C),
    new Card(Face._4, Suit.D),
    new Card(Face._5, Suit.C),
    new Card(Face._6, Suit.S)
  ])

  it('matches as a straight', () => {
    expect(straight1.rank.name).toEqual('Straight')
  })

  it('matches straight start with ace', () => {
    const straightAce = new Hand([
      new Card(Face._2, Suit.S),
      new Card(Face._3, Suit.C),
      new Card(Face._4, Suit.D),
      new Card(Face._5, Suit.C),
      new Card(Face._A, Suit.S)
    ])
    expect(straightAce.rank.name).toEqual('Straight')
  })

  describe('duel', () => {
    const threeOfAKind1 = new Hand([
      new Card(Face._2, Suit.S),
      new Card(Face._2, Suit.C),
      new Card(Face._2, Suit.D),
      new Card(Face._4, Suit.C),
      new Card(Face._8, Suit.S)
    ])

    const straight2 = new Hand([
      new Card(Face._3, Suit.C),
      new Card(Face._4, Suit.D),
      new Card(Face._5, Suit.C),
      new Card(Face._6, Suit.S),
      new Card(Face._7, Suit.S)
    ])

    const straightAce = new Hand([
      new Card(Face._2, Suit.S),
      new Card(Face._3, Suit.C),
      new Card(Face._4, Suit.D),
      new Card(Face._5, Suit.C),
      new Card(Face._A, Suit.S)
    ])

    const straightKingAce = new Hand([
      new Card(Face._T, Suit.S),
      new Card(Face._J, Suit.C),
      new Card(Face._Q, Suit.D),
      new Card(Face._K, Suit.C),
      new Card(Face._A, Suit.S)
    ])

    it('straight > three of a kind', () => {
      expect(straight1.duel(threeOfAKind1)).toEqual(
        'You win: Straight > Three of a Kind'
      )
    })

    it('straight vs straight: highest card of straight wins', () => {
      expect(straight2.duel(straight1)).toEqual('You win: Straight with 7 > 6')
    })

    it('straight vs straight: 6 high win 5 high', () => {
      expect(straight1.duel(straightAce)).toEqual(
        'You win: Straight with 6 > 5'
      )
    })

    it('straight vs straight: 6 high lose ace high', () => {
      expect(straight1.duel(straightKingAce)).toEqual(
        'You lose: Straight with 6 < 14'
      )
    })
  })
})
