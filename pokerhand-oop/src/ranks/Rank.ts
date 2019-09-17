import { Hand } from '~/Hand'
import { Matcher } from '~/matchers/Matcher'

export class Rank {
  constructor(
    public readonly name: string,
    public readonly matcher: Matcher<Hand>
  ) {}

  matches(hand: Hand): boolean {
    return this.matcher.isMatches(hand)
  }
}
