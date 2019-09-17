import { Matcher } from '~/matchers/type'
import { matchers } from '~/matchers/composites'
import { rankMatcher } from '~/matchers/rank'
import { consecutive } from '~/matchers/consecutive'
import { Hand } from '~/card'
import { suits } from '~/matchers/composites/groups'
import { quintuple } from '~/matchers/repeats'

export const straightFlush: Matcher<Hand> = rankMatcher(
  'Straight Flush',
  9,
  matchers(consecutive(true), suits(quintuple(1)))
)
