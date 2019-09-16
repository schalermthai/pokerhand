import { Rank } from '~/ranks/Rank'
import { Hand } from '~/Hand'

export class FullHouse implements Rank {
  get name() { return 'Full House' }

  matches(hand: Hand): boolean {
    return (
      hand
        .groupByValue()
        .triple()
        .countKeys() === 1 &&
      hand
        .groupByValue()
        .double()
        .countKeys() === 1
    )
  }
}
