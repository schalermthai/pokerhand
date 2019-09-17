import { Matcher } from '~/matchers/Matcher'
import { Hand } from '~/Hand'

export class ConsecutiveMatcher implements Matcher<Hand> {
  constructor(private expected: boolean = true) {}

  isMatches(hand: Hand): boolean {
    return hand.isConsecutive === this.expected && hand.size === 5
  }

  matched(hand: Hand): Hand {
    return hand
  }

  unmatched(hand: Hand): Hand {
    return new Hand([])
  }
}
