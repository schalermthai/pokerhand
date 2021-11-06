import { Hand } from '~/Hand'
import { Card, Face, Suit } from '~/Card'
import { RankNames } from '~/ranks/Ranks'

describe(RankNames.FLUSH, () => {
  const flush1 = new Hand([
    new Card(Face._2, Suit.CLUB),
    new Card(Face._7, Suit.CLUB),
    new Card(Face._4, Suit.CLUB),
    new Card(Face._A, Suit.CLUB),
    new Card(Face._6, Suit.CLUB)
  ])

  it('matches as a flush', () => {
    expect(flush1.rank.name).toEqual('Flush')
  })

  describe('duel', () => {
    const straight1 = new Hand([
      new Card(Face._2, Suit.SPADE),
      new Card(Face._3, Suit.CLUB),
      new Card(Face._4, Suit.DIAMONDS),
      new Card(Face._5, Suit.CLUB),
      new Card(Face._6, Suit.SPADE)
    ])

    const flush2 = new Hand([
      new Card(Face._3, Suit.CLUB),
      new Card(Face._7, Suit.CLUB),
      new Card(Face._4, Suit.CLUB),
      new Card(Face._A, Suit.CLUB),
      new Card(Face._6, Suit.CLUB)
    ])

    it('flush > straight', () => {
      expect(flush1.duel(straight1)).toEqual(
        `You win: ${RankNames.FLUSH} > ${RankNames.STRAIGHT}`
      )
    })

    it('flush vs flush: highest card of flush wins', () => {
      expect(flush2.duel(flush1)).toEqual(
        `You win: ${RankNames.FLUSH} with 3 > 2`
      )
    })
  })
})
