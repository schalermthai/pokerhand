import { Matcher } from '~/matchers/type'
import { Hand } from '~/card'
import { groupBySuit } from '~/groups'
import { quintuple } from '~/matchers/faceMatchers'

export const suitMatcher: Matcher = (hand: Hand) =>
  quintuple(1)(groupBySuit(hand))
