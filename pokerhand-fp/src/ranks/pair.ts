import { Matcher } from '~/matchers/type'
import { rankMatcher } from '~/matchers/rank'
import { double, single } from '~/matchers/repeats'
import { Hand } from '~/card'
import { faces } from '~/matchers/composites/groups'

export const pair: Matcher<Hand> = rankMatcher(
  'Pair',
  2,
  faces(double(1), single(3))
)
