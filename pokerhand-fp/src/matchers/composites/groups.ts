import { Matcher } from '~/matchers/type'
import { Group, groupByFace, groupBySuit } from '~/group'
import { Hand } from '~/card'
import { matchers } from '~/matchers/composites/index'

const groups: (
  groupBy
) => (...ms: Matcher<Group>[]) => Matcher<Hand> = groupBy => (
  ...ms
) => hand => {
  const comp = matchers(...ms)
  return {
    result: comp(groupBy(hand)).result,
    matched: comp(groupBy(hand)).matched,
    unmatched: comp(groupBy(hand)).unmatched
  }
}

export const faces = groups(groupByFace)
export const suits = groups(groupBySuit)
