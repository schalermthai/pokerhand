import { Matcher } from '~/matchers/Matcher'
import { Hand } from '~/Hand'

export class ConsecutiveMatcher implements Matcher<Hand> {
  constructor(private expected: boolean = true) {}

  isMatches(t: Hand): boolean {
    return t.isConsecutive === this.expected && t.size === 5
  }

  matched(t: Hand): Hand {
    return t
  }

  unmatched(t: Hand): Hand {
    return new Hand([])
  }
}
