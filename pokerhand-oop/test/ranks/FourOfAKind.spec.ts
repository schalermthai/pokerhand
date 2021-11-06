import { Hand } from '~/Hand'
import { Card, Face, Suit } from '~/Card'
import { RankNames } from '~/ranks/Ranks'

describe(RankNames.FOUR_OF_KIND, () => {
  const fourOfKind1 = new Hand([
    new Card(Face._2, Suit.SPADE),
    new Card(Face._2, Suit.CLUB),
    new Card(Face._2, Suit.DIAMONDS),
    new Card(Face._2, Suit.HEART),
    new Card(Face._8, Suit.SPADE)
  ])

  it('matches as a four of a kind', () => {
    expect(fourOfKind1.rank.name).toEqual(RankNames.FOUR_OF_KIND)
  })

  describe('duel', () => {
    const fullHouse1 = new Hand([
      new Card(Face._2, Suit.SPADE),
      new Card(Face._2, Suit.CLUB),
      new Card(Face._2, Suit.DIAMONDS),
      new Card(Face._4, Suit.CLUB),
      new Card(Face._4, Suit.SPADE)
    ])

    const fourOfKind2 = new Hand([
      new Card(Face._3, Suit.SPADE),
      new Card(Face._3, Suit.CLUB),
      new Card(Face._3, Suit.DIAMONDS),
      new Card(Face._3, Suit.HEART),
      new Card(Face._8, Suit.SPADE)
    ])

    const fourOfKind3 = new Hand([
      new Card(Face._3, Suit.SPADE),
      new Card(Face._3, Suit.CLUB),
      new Card(Face._3, Suit.DIAMONDS),
      new Card(Face._3, Suit.HEART),
      new Card(Face._9, Suit.SPADE)
    ])

    it('four of kind > full house', () => {
      expect(fourOfKind1.duel(fullHouse1)).toEqual(
        `You win: ${RankNames.FOUR_OF_KIND} > ${RankNames.FULL_HOUSE}`
      )
    })

    it('four of kind vs four of kind: highest card of four of kinds wins', () => {
      expect(fourOfKind2.duel(fourOfKind1)).toEqual(
        `You win: ${RankNames.FOUR_OF_KIND} with 3 > 2`
      )
    })

    it('four of kind vs four of kind: highest card of pair wins', () => {
      expect(fourOfKind3.duel(fourOfKind2)).toEqual(
        `You win: ${RankNames.FOUR_OF_KIND} with 9 > 8`
      )
    })
  })
})
