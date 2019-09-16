import { Rank } from '~/ranks/Rank'
import { Hand } from '~/Hand'

export class FourOfAKind implements Rank {
  get name() { return 'Four of a Kind' }
  matches(hand: Hand): boolean {
    return (
      hand
        .groupByValue()
        .quadruple()
        .countKeys() === 1 &&
      hand
        .groupByValue()
        .single()
        .countKeys() === 1
    )
  }
}
