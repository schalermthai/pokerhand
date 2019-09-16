import { Matcher } from '~/matchers/type'
import { consecutiveMatcher } from '~/matchers/consecutiveMatcher'
import { rankMatcher } from '~/ranks/rank'

export const straight: Matcher = rankMatcher('Straight', consecutiveMatcher)
