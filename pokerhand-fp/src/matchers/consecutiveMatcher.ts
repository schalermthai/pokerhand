import { Card, cardValue, Hand, sortByValue } from '~/card'
import * as _ from 'lodash/fp'
import { Matcher } from '~/matchers/type'

const fold: (c: Card, h: Hand) => boolean = (c, h) => {
  if (h.length === 0) return true
  if (cardValue(c) - 1 === cardValue(h[0])) return fold(_.head(h), _.tail(h))
  else return false
}

const isConsecutive = (h: Hand) => fold(_.head(h), _.tail(h))

export const consecutiveMatcher: Matcher = (hand: Hand) => {
  const sorted = hand.sort(sortByValue)
  return {
    result: hand.length === 5 && isConsecutive(sorted),
    primary: sorted,
    secondary: []
  }
}
