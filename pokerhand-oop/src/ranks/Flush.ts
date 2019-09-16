import { Rank } from '~/ranks/Rank'
import { Hand } from '~/Hand'

export class Flush implements Rank {
  get name() { return 'Flush' }

  matches(hand: Hand): boolean {
    return hand.size === 5 && hand.groupBySuit().quintuple().countKeys() === 1
  }

}
