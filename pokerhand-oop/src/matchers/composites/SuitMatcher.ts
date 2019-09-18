import { Matcher } from '~/matchers/Matcher'
import { Hand } from '~/Hand'
import { CompositeMatcher } from '~/matchers/composites/CompositeMatcher'
import { Group } from '~/Group'

export class SuitMatcher implements Matcher<Hand> {
  private composite: CompositeMatcher<Group>

  constructor(primary: Matcher<Group>, secondaries: Matcher<Group>[]) {
    this.composite = new CompositeMatcher(primary, secondaries)
  }

  isMatches(hand: Hand): boolean {
    return this.composite.isMatches(hand.groupBySuit())
  }

  matched(hand: Hand): Hand {
    return this.composite.matched(hand.groupBySuit())
  }

  unmatched(hand: Hand): Hand {
    return this.composite.unmatched(hand.groupBySuit())
  }
}
