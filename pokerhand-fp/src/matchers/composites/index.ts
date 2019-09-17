import { Matcher, MatchingResult } from '~/matchers/type'
import * as _ from 'lodash/fp'

export const matchers: <T>(
  ...matchers: Matcher<T>[]
) => (t: T) => MatchingResult = (...matchers) => t => ({
  result: matchers.every(m => m(t).result),
  matched: _.head(matchers)(t).matched,
  unmatched: _.head(matchers)(t).unmatched
})
