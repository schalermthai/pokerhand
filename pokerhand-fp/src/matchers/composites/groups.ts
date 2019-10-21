import { Matcher } from '~/matchers/type'
import { Group, GroupBy, groupByFace, groupBySuit } from '~/group'
import { Hand } from '~/card'
import { matchers } from '~/matchers/composites/index'

const groups: (g: GroupBy) => (...ms: Matcher<Group>[]) => Matcher<Hand> =
    groupBy => (...groupMatchers) => hand => matchers(...groupMatchers)(groupBy(hand))

export const faces = groups(groupByFace)
export const suits = groups(groupBySuit)
