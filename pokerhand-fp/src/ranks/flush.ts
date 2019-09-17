import { Matcher } from '~/matchers/type'
import { rankMatcher } from '~/matchers/rank'
import { quintuple } from '~/matchers/repeats'
import { Hand } from '~/card'
import { suits } from '~/matchers/composites/groups'

export const flush: Matcher<Hand> = rankMatcher('Flush', 5, suits(quintuple(1)))
