import { Hand } from '~/Hand'
import { HighCard } from '~/ranks/HighCard'
import { Pair } from '~/ranks/Pair'
import { TwoPairs } from '~/ranks/TwoPairs'
import { ThreeOfAKind } from '~/ranks/ThreeOfAKind'
import { Flush } from '~/ranks/Flush'
import { Straight } from '~/ranks/Straight'
import { FourOfAKind } from '~/ranks/FourOfAKind'
import { StraightFlush } from '~/ranks/StraightFlush'
import { Rank } from '~/ranks/Rank'

const registry = [
  new HighCard(),
  new Pair(),
  new TwoPairs(),
  new ThreeOfAKind(),
  new Flush(),
  new Straight(),
  new FourOfAKind(),
  new StraightFlush()
]


export class Ranks {
  static create(hand: Hand): Rank | undefined {
    return registry.find(r => r.matches(hand))
  }
}
