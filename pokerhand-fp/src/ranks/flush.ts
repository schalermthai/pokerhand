import { Matcher } from '~/matchers/type'
import { suitMatcher } from '~/matchers/suitMatchers'
import { rankMatcher } from '~/ranks/rank'

export const flush: Matcher = rankMatcher('Flush', suitMatcher)
