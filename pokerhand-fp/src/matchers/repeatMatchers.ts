import {
  count,
  filterBy,
  Group,
  values,
  valueSizeEq,
  valueSizeNotEq
} from '~/groups'
import { MatchingResult } from '~/matchers/type'

export type RepeatMatcher = (group: Group) => MatchingResult
export type RepeatMatcherCreator = (matcher: number) => RepeatMatcher

export const repeatMatcher: (
  repeat: number
) => RepeatMatcherCreator = repeat => matcher => group => ({
  result: count(filterBy(valueSizeEq(repeat), group)) === matcher,
  primary: values(filterBy(valueSizeEq(repeat), group)),
  secondary: values(filterBy(valueSizeNotEq(repeat), group))
})
