import { Hand } from '~/Hand'

const allRanks = [
  'High Card',
  'Pair',
  'Two Pairs',
  'Three of a Kind',
  'Flush',
  'Straight',
  'Four of a Kind',
  'Straight Flush'
]

class MatchingResult {
  constructor(
    public readonly name: string,
    public readonly result: boolean,
    public readonly matched: Hand,
    public readonly unmatched: Hand
  ) {}

  compareTo(r: MatchingResult) {
    return this.matched.compareTo(r.matched)
  }
}
