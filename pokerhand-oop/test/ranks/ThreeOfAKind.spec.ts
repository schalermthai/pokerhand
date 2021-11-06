import { Hand } from '~/Hand'
import { Card, Face, Suit } from '~/Card'
import { RankNames } from '~/ranks/Ranks'

describe(RankNames.THREE_OF_KIND, () => {
  const threeOfAKind1 = new Hand([
    new Card(Face._2, Suit.SPADE),
    new Card(Face._2, Suit.CLUB),
    new Card(Face._2, Suit.DIAMONDS),
    new Card(Face._4, Suit.CLUB),
    new Card(Face._8, Suit.SPADE)
  ])

  it('matches as a three of a kind', () => {
    expect(threeOfAKind1.rank.name).toEqual(RankNames.THREE_OF_KIND)
  })

  describe('duel', () => {
    const twoPair1 = new Hand([
      new Card(Face._2, Suit.SPADE),
      new Card(Face._2, Suit.CLUB),
      new Card(Face._4, Suit.SPADE),
      new Card(Face._4, Suit.CLUB),
      new Card(Face._8, Suit.SPADE)
    ])

    const threeOfAKind2 = new Hand([
      new Card(Face._3, Suit.SPADE),
      new Card(Face._3, Suit.CLUB),
      new Card(Face._3, Suit.DIAMONDS),
      new Card(Face._4, Suit.CLUB),
      new Card(Face._8, Suit.SPADE)
    ])

    const threeOfAKind3 = new Hand([
      new Card(Face._3, Suit.SPADE),
      new Card(Face._3, Suit.CLUB),
      new Card(Face._3, Suit.DIAMONDS),
      new Card(Face._5, Suit.CLUB),
      new Card(Face._8, Suit.SPADE)
    ])

    it('three of kind > two pairs', () => {
      expect(threeOfAKind1.duel(twoPair1)).toEqual(
        `You win: ${RankNames.THREE_OF_KIND} > ${RankNames.TWO_PAIRS}`
      )
    })

    it('three of kind vs three of kind: highest card of three of a kind wins', () => {
      expect(threeOfAKind2.duel(threeOfAKind1)).toEqual(
        `You win: ${RankNames.THREE_OF_KIND} with 3 > 2`
      )
    })

    it('three of kind vs three of kind: same highest pair, highest high card wins', () => {
      expect(threeOfAKind3.duel(threeOfAKind2)).toEqual(
        `You win: ${RankNames.THREE_OF_KIND} with 5 > 4`
      )
    })
  })
})
