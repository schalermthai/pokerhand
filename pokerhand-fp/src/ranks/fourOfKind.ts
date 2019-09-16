import { Matcher } from '~/matchers/type'
import { faceMatcher, quadruple, single } from '~/matchers/faceMatchers'
import { rankMatcher } from '~/ranks/rank'

export const fourOfKind: Matcher = rankMatcher(
  'Four of a Kind',
  faceMatcher(quadruple(1), single(1))
)
