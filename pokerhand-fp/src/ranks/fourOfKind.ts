import { Matcher } from '~/matchers/type'
import { rankMatcher } from '~/matchers/rank'
import { quadruple, single } from '~/matchers/repeats'
import { faces } from '~/matchers/composites/groups'
import { Hand } from '~/card'

export const fourOfKind: Matcher<Hand> = rankMatcher(
  'Four of a Kind',
  8,
  faces(quadruple(1), single(1))
)
