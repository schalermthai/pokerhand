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
  Matchers.compose(
    Matchers.faces(Matchers.single(5)),
    Matchers.suits(Matchers.moreThanOne()),
    Matchers.notConsecutive()
  )
)

const pair = new Rank(
  'Pair',
  Matchers.faces(Matchers.double(1), Matchers.single(3))
)

const twoPairs = new Rank(
  'Two Pairs',
  Matchers.faces(Matchers.double(2), Matchers.single(1))
)

const threeOfAKind = new Rank(
  'Three of a Kind',
  Matchers.faces(Matchers.triple(1), Matchers.single(2))
)

const flush = new Rank(
  'Flush',
  Matchers.compose(
    Matchers.suits(Matchers.quint(1)),
    Matchers.notConsecutive()
  )
)

const straight = new Rank(
  'Straight',
  Matchers.compose(
    Matchers.suits(Matchers.moreThanOne()),
    Matchers.consecutive()
  )
)

const fullHouse = new Rank(
  'Full House',
  Matchers.faces(Matchers.triple(1), Matchers.double(1))
)

const fourOfAKind = new Rank(
  'Four of a Kind',
  Matchers.faces(Matchers.quad(1), Matchers.single(1))
)

const straightFlush = new Rank(
  'Straight Flush',
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
