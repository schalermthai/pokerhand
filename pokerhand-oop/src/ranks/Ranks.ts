import { Hand } from '~/Hand'
import { Matchers } from '~/matchers/Matchers'
import { Rank } from '~/ranks/Rank'

export enum RankNames {
  HIGH_CARD = 'High Card',
  PAIR = 'PAIR',
  TWO_PAIRS = 'Two Pairs',
  THREE_OF_KIND = 'Three of a Kind',
  STRAIGHT = 'Straight',
  FLUSH = 'Flush',
  FULL_HOUSE = 'Full House',
  FOUR_OF_KIND = 'Four of a Kind',
  STRAIGHT_FLUSH = 'Straight Flush'
}

export class Ranks {
  static create(hand: Hand): Rank {
    return registry.find(r => r.matches(hand))!
  }
}

const highCard = new Rank(
  RankNames.HIGH_CARD,
  1,
  Matchers.compose(
    Matchers.faces(Matchers.single(5)),
    Matchers.suits(Matchers.moreThanOne()),
    Matchers.notConsecutive()
  )
)

const pair = new Rank(
  RankNames.PAIR,
  2,
  Matchers.faces(Matchers.double(1), Matchers.single(3))
)

const twoPairs = new Rank(
  RankNames.TWO_PAIRS,
  3,
  Matchers.faces(Matchers.double(2), Matchers.single(1))
)

const threeOfAKind = new Rank(
  RankNames.THREE_OF_KIND,
  4,
  Matchers.faces(Matchers.triple(1), Matchers.single(2))
)

const straight = new Rank(
  RankNames.STRAIGHT,
  5,
  Matchers.compose(
    Matchers.consecutive(),
    Matchers.suits(Matchers.moreThanOne())
  )
)

const flush = new Rank(
  RankNames.FLUSH,
  6,
  Matchers.compose(
    Matchers.suits(Matchers.quint(1)),
    Matchers.notConsecutive()
  )
)

const fullHouse = new Rank(
  RankNames.FULL_HOUSE,
  7,
  Matchers.faces(Matchers.triple(1), Matchers.double(1))
)

const fourOfAKind = new Rank(
  RankNames.FOUR_OF_KIND,
  8,
  Matchers.faces(Matchers.quad(1), Matchers.single(1))
)

const straightFlush = new Rank(
  RankNames.STRAIGHT_FLUSH,
  9,
  Matchers.compose(
    Matchers.consecutive(),
    Matchers.suits(Matchers.quint(1))
  )
)

export const registry = [
  highCard,
  pair,
  twoPairs,
  threeOfAKind,
  flush,
  straight,
  fullHouse,
  fourOfAKind,
  straightFlush
]
