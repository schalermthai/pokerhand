import { Hand } from '~/Hand'
import { Card, Face, Suit } from '~/Card'

describe('Four of a Kind', () => {
  const fourOfKind1 = new Hand([
    new Card(Face._2, Suit.S),
    new Card(Face._2, Suit.C),
    new Card(Face._2, Suit.D),
    new Card(Face._2, Suit.H),
    new Card(Face._8, Suit.S)
  ])

  it('matches as a four of a kind', () => {
    expect(fourOfKind1.rank.name).toEqual('Four of a Kind')
  })

  describe('duel', () => {
    const fullHouse1 = new Hand([
      new Card(Face._2, Suit.S),
      new Card(Face._2, Suit.C),
      new Card(Face._2, Suit.D),
      new Card(Face._4, Suit.C),
      new Card(Face._4, Suit.S)
    ])

    const fourOfKind2 = new Hand([
      new Card(Face._3, Suit.S),
      new Card(Face._3, Suit.C),
      new Card(Face._3, Suit.D),
      new Card(Face._3, Suit.H),
      new Card(Face._8, Suit.S)
    ])

    const fourOfKind3 = new Hand([
      new Card(Face._3, Suit.S),
      new Card(Face._3, Suit.C),
      new Card(Face._3, Suit.D),
      new Card(Face._3, Suit.H),
      new Card(Face._9, Suit.S)
    ])

    it('four of kind > full house', () => {
      expect(fourOfKind1.duel(fullHouse1)).toEqual(
        'You win: Four of a Kind > Full House'
      )
    })

    it('four of kind vs four of kind: highest card of four of kinds wins', () => {
      expect(fourOfKind2.duel(fourOfKind1)).toEqual(
        'You win: Four of a Kind with 3 > 2'
      )
    })

    it('four of kind vs four of kind: highest card of pair wins', () => {
      expect(fourOfKind3.duel(fourOfKind2)).toEqual(
        'You win: Four of a Kind with 9 > 8'
      )
    })
  })
})
