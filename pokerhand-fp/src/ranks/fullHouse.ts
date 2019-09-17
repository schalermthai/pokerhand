import { Matcher } from '~/matchers/type'
import { rankMatcher } from '~/matchers/rank'
import { double, triple } from '~/matchers/repeats'
import { Hand } from '~/card'
import { faces } from '~/matchers/composites/groups'

export const fullHouse: Matcher<Hand> = rankMatcher(
  'Full House',
  7,
  faces(triple(1), double(1))
)
