import {
  count,
  filterBy,
  Group,
  values,
  valueSizeEq,
  valueSizeNotEq
} from '~/group'
import { Matcher } from '~/matchers/type'

export type MatcherCreator<T> = (matcher: number) => Matcher<T>

export const repeatEqual: (
  repeat: number
) => MatcherCreator<Group> = repeat => matcher => group => ({
  result: count(filterBy(valueSizeEq(repeat), group)) === matcher,
  matched: values(filterBy(valueSizeEq(repeat), group)),
  unmatched: values(filterBy(valueSizeNotEq(repeat), group))
})
