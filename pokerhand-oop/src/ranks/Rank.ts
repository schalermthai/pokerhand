import { Hand } from '~/Hand'
import { Matcher } from '~/matchers/Matcher'

export class Rank {
  constructor(
    public readonly name: string,
    public readonly value: number,
    public readonly matcher: Matcher<Hand>
  ) {}

  matches(hand: Hand): boolean {
    return this.matcher.isMatches(hand)
  }

  compareTo(r: Rank): number {
    return this.value - r.value
  }

  duel(r: Rank): Nullable<string> {
    const rankValue = this.compareTo(r)
    if (rankValue > 0) return `You win: ${this.name} > ${r.name}`
    else if (rankValue < 0) return `You lose: ${this.name} < ${r.name}`
    else return null
  }
}
