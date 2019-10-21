import { Matcher, MatchingResult } from '~/matchers/type'
import { Hand } from '~/card'

export type Rank =
  | 'High Card'
  | 'Pair'
  | 'Two Pairs'
  | 'Three of a Kind'
  | 'Straight'
  | 'Flush'
  | 'Full House'
  | 'Four of a Kind'
  | 'Straight Flush'

export type RankMatcherResult = { name: Rank; value: number } & MatchingResult

export const rankMatcher: (
  name: Rank,
  value: number,
  matcher: Matcher<Hand>
) => (hand: Hand) => RankMatcherResult =
  (name, value, matcher) => hand => ({
  name,
  value,
  ...matcher(hand)
})
