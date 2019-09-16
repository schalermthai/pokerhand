import { Matcher } from '~/matchers/type'
import { faceMatcher, single, triple } from '~/matchers/faceMatchers'
import { rankMatcher } from '~/ranks/rank'

export const threeOfKind: Matcher = rankMatcher(
  'Three of a Kind',
  faceMatcher(triple(1), single(2))
)
