import { Group } from '~/group'
import { Matcher } from '~/matchers/type'
import { repeatMoreThan } from '~/matchers/repeats/repeatMoreThan'
import { MatcherCreator, repeatEqual } from '~/matchers/repeats/repeatEqual'

export const moreThanOne: Matcher<Group> = repeatMoreThan(1)
export const single: MatcherCreator<Group> = repeatEqual(1)
export const double: MatcherCreator<Group> = repeatEqual(2)
export const triple: MatcherCreator<Group> = repeatEqual(3)
export const quadruple: MatcherCreator<Group> = repeatEqual(4)
export const quintuple: MatcherCreator<Group> = repeatEqual(5)
