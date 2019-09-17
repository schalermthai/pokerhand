import { flush } from './flush'
import { Matcher } from '~/matchers/type'
import { matchers } from '~/matchers/composites'
import { rankMatcher } from '~/matchers/rank'
import { consecutive } from '~/matchers/consecutive'
import { Hand } from '~/card'

export const straightFlush: Matcher<Hand> = rankMatcher(
  'Straight Flush',
  8,
  matchers(consecutive(true), flush)
)
