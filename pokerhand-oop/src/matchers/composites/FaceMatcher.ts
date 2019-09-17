import { Matcher } from '~/matchers/Matcher'
import { Group } from '~/Group'
import { Hand } from '~/Hand'
import { CompositeMatcher } from '~/matchers/composites/CompositeMatcher'

export class FaceMatcher implements Matcher<Hand> {
  private composite: CompositeMatcher<Group>

  constructor(primary: Matcher<Group>, secondary: Matcher<Group>[]) {
    this.composite = new CompositeMatcher(primary, secondary)
  }

  isMatches(hand: Hand): boolean {
    return this.composite.isMatches(hand.groupByValue())
  }

  matched(hand: Hand): Hand {
    return this.composite.matched(hand.groupByValue())
  }

  unmatched(hand: Hand): Hand {
    return this.composite.unmatched(hand.groupByValue())
  }
}
