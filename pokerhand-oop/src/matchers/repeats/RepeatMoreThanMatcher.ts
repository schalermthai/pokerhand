import { Group } from '~/Group'
import { Hand } from '~/Hand'
import { Matcher } from '~/matchers/Matcher'

export class RepeatMoreThanMatcher implements Matcher<Group> {
  constructor(protected repeat: number) {}

  isMatches(group: Group): boolean {
    return group.countKeys() > this.repeat
  }

  matched(group: Group): Hand {
    return this.isMatches(group) ? group.values() : new Hand([])
  }

  unmatched(group: Group): Hand {
    return this.isMatches(group) ? new Hand([]) : group.values()
  }
}
