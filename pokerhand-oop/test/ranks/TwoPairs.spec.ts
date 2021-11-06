import { Hand } from '~/Hand'
import { Card, Face, Suit } from '~/Card'
import { RankNames } from '~/ranks/Ranks'

describe(RankNames.TWO_PAIRS, () => {
  const twoPair1 = new Hand([
    new Card(Face._2, Suit.SPADE),
    new Card(Face._2, Suit.CLUB),
    new Card(Face._4, Suit.SPADE),
    new Card(Face._4, Suit.CLUB),
    new Card(Face._8, Suit.SPADE)
  ])

  it('matches as two pairs', () => {
    expect(twoPair1.rank.name).toEqual(RankNames.TWO_PAIRS)
  })

  describe('duel', () => {
    const pair = new Hand([
      new Card(Face._2, Suit.SPADE),
      new Card(Face._2, Suit.CLUB),
      new Card(Face._4, Suit.SPADE),
      new Card(Face._6, Suit.SPADE),
      new Card(Face._8, Suit.SPADE)
    ])

    const twoPair2 = new Hand([
      new Card(Face._2, Suit.SPADE),
      new Card(Face._2, Suit.CLUB),
      new Card(Face._5, Suit.SPADE),
      new Card(Face._5, Suit.CLUB),
      new Card(Face._8, Suit.SPADE)
    ])

    const twoPair3 = new Hand([
      new Card(Face._3, Suit.SPADE),
      new Card(Face._3, Suit.CLUB),
      new Card(Face._5, Suit.SPADE),
      new Card(Face._5, Suit.CLUB),
      new Card(Face._8, Suit.SPADE)
    ])

    const twoPair4 = new Hand([
      new Card(Face._3, Suit.SPADE),
      new Card(Face._3, Suit.CLUB),
      new Card(Face._5, Suit.SPADE),
      new Card(Face._5, Suit.CLUB),
      new Card(Face._9, Suit.SPADE)
    ])

    it('two pairs > pair', () => {
      expect(twoPair1.duel(pair)).toEqual(
        `You win: ${RankNames.TWO_PAIRS} > ${RankNames.PAIR}`
      )
    })

    it('two pairs vs two pairs: highest two pairs wins', () => {
      expect(twoPair2.duel(twoPair1)).toEqual(
        `You win: ${RankNames.TWO_PAIRS} with 5 > 4`
      )
    })

    it('two pairs vs two pairs: highest two pairs wins', () => {
      expect(twoPair3.duel(twoPair2)).toEqual(
        `You win: ${RankNames.TWO_PAIRS} with 3 > 2`
      )
    })

    it('two pairs vs two pairs: same highest pair, highest high card wins', () => {
      expect(twoPair4.duel(twoPair3)).toEqual(
        `You win: ${RankNames.TWO_PAIRS} with 9 > 8`
      )
    })
  })
})
