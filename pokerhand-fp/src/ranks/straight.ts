import { Matcher } from '~/matchers/type'
import { consecutive } from '~/matchers/consecutive'
import { rankMatcher } from '~/matchers/rank'
import { matchers } from '~/matchers/composites'
import { moreThanOne } from '~/matchers/repeats'
import { Hand } from '~/card'
import { suits } from '~/matchers/composites/groups'

export const straight: Matcher<Hand> = rankMatcher(
  'Straight',
  4,
  matchers(consecutive(true), suits(moreThanOne))
)
