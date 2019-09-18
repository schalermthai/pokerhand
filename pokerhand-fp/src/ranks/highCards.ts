import { Matcher } from '~/matchers/type'
import { rankMatcher } from '~/matchers/rank'
import { moreThanOne, single } from '~/matchers/repeats'
import { matchers } from '~/matchers/composites'
import { Hand } from '~/card'
import { faces, suits } from '~/matchers/composites/groups'
import { consecutive } from '~/matchers/consecutive'

export const highCard: Matcher<Hand> = rankMatcher(
  'High Card',
  1,
  matchers(faces(single(5)), suits(moreThanOne), consecutive(false))
)
