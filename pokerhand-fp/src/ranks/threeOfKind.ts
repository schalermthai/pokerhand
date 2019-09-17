import { Matcher } from '~/matchers/type'
import { rankMatcher } from '~/matchers/rank'
import { single, triple } from '~/matchers/repeats'
import { Hand } from '~/card'
import { faces } from '~/matchers/composites/groups'

export const threeOfKind: Matcher<Hand> = rankMatcher(
  'Three of a Kind',
  4,
  faces(triple(1), single(2))
)
