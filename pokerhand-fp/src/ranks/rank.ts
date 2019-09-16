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

export type RankMatcherResult = { name: Rank } & MatchingResult

export const rankValues = (rank: Rank) =>
  [
    'High Card',
    'Pair',
    'Two Pairs',
    'Three of a Kind',
    'Straight',
    'Flush',
    'Full House',
    'Four of a Kind',
    'Straight Flush'
  ].indexOf(rank)

export const rankMatcher: (
  name: Rank,
  matcher: Matcher
) => (hand: Hand) => RankMatcherResult = (name, matcher) => hand => ({
  name,
  ...matcher(hand)
})
