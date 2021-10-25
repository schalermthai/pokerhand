import { Hand } from '~/Hand'
import { Card, Face, Suit } from '~/Card'
import { RankNames } from "~/ranks/Ranks";

describe(RankNames.PAIR, () => {
  const pair1 = new Hand([
    new Card(Face._2, Suit.SPADE),
    new Card(Face._2, Suit.CLUB),
    new Card(Face._4, Suit.SPADE),
    new Card(Face._6, Suit.SPADE),
    new Card(Face._8, Suit.SPADE)
  ])

  it('matches as a pair', () => {
    expect(pair1.rank.name).toEqual(RankNames.PAIR)
  })

  describe('duel', () => {
    const highCard = new Hand([
      new Card(Face._2, Suit.SPADE),
      new Card(Face._7, Suit.CLUB),
      new Card(Face._4, Suit.SPADE),
      new Card(Face._6, Suit.SPADE),
      new Card(Face._8, Suit.SPADE)
    ])

    const pair2 = new Hand([
      new Card(Face._3, Suit.SPADE),
      new Card(Face._3, Suit.CLUB),
      new Card(Face._4, Suit.SPADE),
      new Card(Face._6, Suit.SPADE),
      new Card(Face._8, Suit.SPADE)
    ])

    const pair3 = new Hand([
      new Card(Face._3, Suit.SPADE),
      new Card(Face._3, Suit.CLUB),
      new Card(Face._4, Suit.SPADE),
      new Card(Face._6, Suit.SPADE),
      new Card(Face._9, Suit.SPADE)
    ])

    it('pair > high Card', () => {
      expect(pair1.duel(highCard)).toEqual(`You win: ${RankNames.PAIR} > ${RankNames.HIGH_CARD}`)
      expect(highCard.duel(pair1)).toEqual(`You lose: ${RankNames.HIGH_CARD} < ${RankNames.PAIR}`)
    })

    it('pair of 2 vs pair of 3: higher pair wins', () => {
      expect(pair2.duel(pair1)).toEqual(`You win: ${RankNames.PAIR} with 3 > 2`)
      expect(pair1.duel(pair2)).toEqual(`You lose: ${RankNames.PAIR} with 2 < 3`)
    })

    it('pair of 3 vs pair of 3: higher high card wins', () => {
      expect(pair3.duel(pair2)).toEqual(`You win: ${RankNames.PAIR} with 9 > 8`)
      expect(pair2.duel(pair3)).toEqual(`You lose: ${RankNames.PAIR} with 8 < 9`)
    })

    it('pair vs pair: Tie', () => {
      expect(pair1.duel(pair1)).toEqual('Tie')
      expect(pair2.duel(pair2)).toEqual('Tie')
      expect(pair3.duel(pair3)).toEqual('Tie')
    })
  })
})
