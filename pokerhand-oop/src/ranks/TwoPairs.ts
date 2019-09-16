import { Rank } from '~/ranks/Rank'
import { Hand } from '~/Hand'

export class TwoPairs implements Rank {
  get name() { return 'Two Pairs' }

  matches(hand: Hand): boolean {
    return (
      hand
        .groupByValue()
        .double()
        .countKeys() === 2 &&
      hand
        .groupByValue()
        .single()
        .countKeys() === 1
    )
  }
}
