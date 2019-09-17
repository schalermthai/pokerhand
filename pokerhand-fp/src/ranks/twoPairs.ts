import { Matcher } from '~/matchers/type'
import { rankMatcher } from '~/matchers/rank'
import { double } from '~/matchers/repeats'
import { Hand } from '~/card'
import { faces } from '~/matchers/composites/groups'

export const twoPairs: Matcher<Hand> = rankMatcher(
  'Two Pairs',
  3,
  faces(double(2))
)
