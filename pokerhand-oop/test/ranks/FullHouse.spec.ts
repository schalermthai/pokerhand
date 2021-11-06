import { Hand } from '~/Hand'
import { Card, Face, Suit } from '~/Card'
import { RankNames } from '~/ranks/Ranks'

describe(RankNames.FULL_HOUSE, () => {
  const fullHouse1 = new Hand([
    new Card(Face._2, Suit.SPADE),
    new Card(Face._2, Suit.CLUB),
    new Card(Face._2, Suit.DIAMONDS),
    new Card(Face._4, Suit.CLUB),
    new Card(Face._4, Suit.SPADE)
  ])

  it('matches as a full house', () => {
    expect(fullHouse1.rank.name).toEqual(RankNames.FULL_HOUSE)
  })

  describe('duel', () => {
    const flush1 = new Hand([
      new Card(Face._2, Suit.CLUB),
      new Card(Face._7, Suit.CLUB),
      new Card(Face._4, Suit.CLUB),
      new Card(Face._A, Suit.CLUB),
      new Card(Face._6, Suit.CLUB)
    ])

    const fullHouse2 = new Hand([
      new Card(Face._3, Suit.SPADE),
      new Card(Face._3, Suit.CLUB),
      new Card(Face._3, Suit.DIAMONDS),
      new Card(Face._4, Suit.CLUB),
      new Card(Face._4, Suit.SPADE)
    ])

    const fullHouse3 = new Hand([
      new Card(Face._3, Suit.SPADE),
      new Card(Face._3, Suit.CLUB),
      new Card(Face._3, Suit.DIAMONDS),
      new Card(Face._5, Suit.CLUB),
      new Card(Face._5, Suit.SPADE)
    ])

    it('full house > flush', () => {
      expect(fullHouse1.duel(flush1)).toEqual(
        `You win: ${RankNames.FULL_HOUSE} > ${RankNames.FLUSH}`
      )
    })

    it('full house vs full house: highest card of three of kinds wins', () => {
      expect(fullHouse2.duel(fullHouse1)).toEqual(
        `You win: ${RankNames.FULL_HOUSE} with 3 > 2`
      )
    })

    it('full house vs full house: highest card of pair wins', () => {
      expect(fullHouse3.duel(fullHouse2)).toEqual(
        `You win: ${RankNames.FULL_HOUSE} with 5 > 4`
      )
    })
  })
})
