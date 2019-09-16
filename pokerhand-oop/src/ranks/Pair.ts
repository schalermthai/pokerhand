import { Rank } from '~/ranks/Rank'
import { Hand } from '~/Hand'

export class Pair implements Rank {
  get name() { return 'Pair' }

  matches(hand: Hand): boolean {
    return (
      hand
        .groupByValue()
        .double()
        .countKeys() === 1 &&
      hand
        .groupByValue()
        .single()
        .countKeys() === 3
    )
  }
}
