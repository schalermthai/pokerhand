import { Matcher } from '~/matchers/type'
import { rankMatcher } from '~/matchers/rank'
import { quintuple } from '~/matchers/repeats'
import { Hand } from '~/card'
import { suits } from '~/matchers/composites/groups'
import { matchers } from '~/matchers/composites'
import { consecutive } from '~/matchers/consecutive'

export const flush: Matcher<Hand> = rankMatcher(
  'Flush',
  6,
  matchers(suits(quintuple(1)), consecutive(false))
)
