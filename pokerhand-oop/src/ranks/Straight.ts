import { Rank } from '~/ranks/Rank'
import { Hand } from '~/Hand'

export class Straight implements Rank {
  get name() { return 'Straight' }

  matches(hand: Hand): boolean {
    return (
      hand.size == 5 && hand.isConsecutive && hand.groupBySuit().countKeys() > 1
    )
  }
}
