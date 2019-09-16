import { Matcher } from '~/matchers/type'
import { faceMatcher, double } from '~/matchers/faceMatchers'
import { rankMatcher } from '~/ranks/rank'

export const twoPairs: Matcher = rankMatcher(
  'Two Pairs',
  faceMatcher(double(2))
)
