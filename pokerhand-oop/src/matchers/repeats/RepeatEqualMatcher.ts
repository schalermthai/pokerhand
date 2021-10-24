import { Matcher } from '~/matchers/Matcher'
import { Hand } from '~/Hand'
import { Group } from '~/Group'
import { Card } from '~/Card'

export class RepeatEqualMatcher implements Matcher<Group> {
  constructor(
      private predicate: (cs: Card[]) => boolean,
      private repeat: number
  ) {}

  isMatches(group: Group): boolean {
    return group.filter(this.predicate).countKeys() === this.repeat
  }

  matched(group: Group): Hand {
    return group.filter(this.predicate).values()
  }

  unmatched(group: Group): Hand {
    return group.filter(this.notPredicate()).values()
  }

  private notPredicate() {
    return (cs: Card[]) => !this.predicate(cs)
  }
}
