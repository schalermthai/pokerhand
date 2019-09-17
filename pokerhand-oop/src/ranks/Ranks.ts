import { Hand } from '~/Hand'
import { Matchers } from '~/matchers/Matchers'
import { Rank } from '~/ranks/Rank'

export class Ranks {
  static create(hand: Hand): Rank {
    // @ts-ignore
    return registry.find(r => r.matches(hand))
  }
}

const highCard = new Rank(
  'High Card',
  1,
  Matchers.compose(
    Matchers.faces(Matchers.single(5)),
    Matchers.suits(Matchers.moreThanOne()),
    Matchers.notConsecutive()
  )
)

const pair = new Rank(
  'Pair',
  2,
  Matchers.faces(Matchers.double(1), Matchers.single(3))
)

const twoPairs = new Rank(
  'Two Pairs',
  3,
  Matchers.faces(Matchers.double(2), Matchers.single(1))
)

const threeOfAKind = new Rank(
  'Three of a Kind',
  4,
  Matchers.faces(Matchers.triple(1), Matchers.single(2))
)

const flush = new Rank(
  'Flush',
  5,
  Matchers.compose(
    Matchers.suits(Matchers.quint(1)),
    Matchers.notConsecutive()
  )
)

const straight = new Rank(
  'Straight',
  6,
  Matchers.compose(
    Matchers.suits(Matchers.moreThanOne()),
    Matchers.consecutive()
  )
)

const fullHouse = new Rank(
  'Full House',
  7,
  Matchers.faces(Matchers.triple(1), Matchers.double(1))
)

const fourOfAKind = new Rank(
  'Four of a Kind',
  8,
  Matchers.faces(Matchers.quad(1), Matchers.single(1))
)

const straightFlush = new Rank(
  'Straight Flush',
  9,
  Matchers.compose(
    Matchers.suits(Matchers.quint(1)),
    Matchers.consecutive()
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
