import { Matcher } from '~/matchers/type'
import { count, Group, values } from '~/group'

export const repeatMoreThan: (
  repeat: number
) => Matcher<Group> = matcher => group => ({
  result: count(group) > matcher,
  matched: count(group) > matcher ? values(group) : [],
  unmatched: count(group) > matcher ? [] : values(group)
})
