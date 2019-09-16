import { Rank } from '~/ranks/Rank'
import { Hand } from '~/Hand'

export class StraightFlush implements Rank {
  get name() { return 'Straight Flush' }

  matches(hand: Hand): boolean {
    return (
      hand.size === 5 &&
      hand.isConsecutive &&
      hand.groupBySuit().quintuple().countKeys() === 1
    )
  }
}
