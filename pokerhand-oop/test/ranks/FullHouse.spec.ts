import { Hand } from '~/Hand'
import { Card, Face, Suit } from '~/Card'

describe('Full House', () => {
  const fullHouse1 = new Hand([
    new Card(Face._2, Suit.S),
    new Card(Face._2, Suit.C),
    new Card(Face._2, Suit.D),
    new Card(Face._4, Suit.C),
    new Card(Face._4, Suit.S)
  ])

  it('matches as a full house', () => {
    expect(fullHouse1.rank.name).toEqual('Full House')
  })

  describe('duel', () => {
    const flush1 = new Hand([
      new Card(Face._2, Suit.C),
      new Card(Face._7, Suit.C),
      new Card(Face._4, Suit.C),
      new Card(Face._A, Suit.C),
      new Card(Face._6, Suit.C)
    ])

    const fullHouse2 = new Hand([
      new Card(Face._3, Suit.S),
      new Card(Face._3, Suit.C),
      new Card(Face._3, Suit.D),
      new Card(Face._4, Suit.C),
      new Card(Face._4, Suit.S)
    ])

    const fullHouse3 = new Hand([
      new Card(Face._3, Suit.S),
      new Card(Face._3, Suit.C),
      new Card(Face._3, Suit.D),
      new Card(Face._5, Suit.C),
      new Card(Face._5, Suit.S)
    ])

    it('full house > flush', () => {
      expect(fullHouse1.duel(flush1)).toEqual('You win: Full House > Flush')
    })

    it('full house vs full house: highest card of three of kinds wins', () => {
      expect(fullHouse2.duel(fullHouse1)).toEqual(
        'You win: Full House with 3 > 2'
      )
    })

    it('full house vs full house: highest card of pair wins', () => {
      expect(fullHouse3.duel(fullHouse2)).toEqual(
        'You win: Full House with 5 > 4'
      )
    })
  })
})
