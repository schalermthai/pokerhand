import { Matcher } from '~/matchers/type'
import { faceMatcher, double, triple } from '~/matchers/faceMatchers'
import { rankMatcher } from '~/ranks/rank'

export const fullHouse: Matcher = rankMatcher(
  'Full House',
  faceMatcher(triple(1), double(1))
)
