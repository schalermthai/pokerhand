import { Hand } from '~/Hand'
import { Rank } from '~/ranks/Rank'

export class HighCard implements Rank {
  get name() { return 'High Card' }

  matches(hand: Hand): boolean {
    return hand
        .groupByValue()
        .single()
        .countKeys() === 5
    && hand.groupBySuit().countKeys() > 1
  }
}
