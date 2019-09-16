import { straight as isStraight } from './straight'
import { flush as isFlush } from './flush'
import { Matcher } from '~/matchers/type'
import { matchers } from '~/matchers'
import { rankMatcher } from '~/ranks/rank'

export const straightFlush: Matcher = rankMatcher(
  'Straight Flush',
  matchers(isStraight, isFlush)
)
