import { Matcher } from '~/matchers/type'
import { faceMatcher, single } from '~/matchers/faceMatchers'
import { rankMatcher } from '~/ranks/rank'

export const highCard: Matcher = rankMatcher(
  'High Card',
  faceMatcher(single(5))
)
