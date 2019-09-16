import { Matcher } from '~/matchers/type'
import { faceMatcher, double, single } from '~/matchers/faceMatchers'
import { rankMatcher } from '~/ranks/rank'

export const pair: Matcher = rankMatcher(
  'Pair',
  faceMatcher(double(1), single(3))
)
