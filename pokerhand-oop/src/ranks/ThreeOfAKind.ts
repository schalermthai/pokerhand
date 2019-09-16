import { Rank } from '~/ranks/Rank'
import { Hand } from '~/Hand'

export class ThreeOfAKind implements Rank {
  get name() { return 'Three of a Kind' }

  matches(hand: Hand): boolean {
    return (
      hand
        .groupByValue()
        .triple()
        .countKeys() === 1 &&
      hand
        .groupByValue()
        .single()
        .countKeys() === 2
    )
  }
}
