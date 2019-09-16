import {
  RepeatMatcher,
  repeatMatcher,
  RepeatMatcherCreator
} from '~/matchers/repeatMatchers'
import { groupByFace } from '~/groups'
import * as _ from 'lodash/fp'
import { Matcher } from '~/matchers/type'

export const single: RepeatMatcherCreator = repeatMatcher(1)
export const double: RepeatMatcherCreator = repeatMatcher(2)
export const triple: RepeatMatcherCreator = repeatMatcher(3)
export const quadruple: RepeatMatcherCreator = repeatMatcher(4)
export const quintuple: RepeatMatcherCreator = repeatMatcher(5)

export const faceMatcher: (...matchers: RepeatMatcher[]) => Matcher = (
  ...matchers
) => hand => ({
  result: matchers.every(m => m(groupByFace(hand)).result),
  primary: _.head(matchers)(groupByFace(hand)).primary,
  secondary: _.head(matchers)(groupByFace(hand)).secondary
})
