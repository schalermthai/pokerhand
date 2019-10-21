import { Hand, isConsecutive, sortByValue } from '~/card'
import { Matcher } from '~/matchers/type'

export const consecutive: (expected: boolean) => Matcher<Hand> =
    expected => (hand: Hand) => {
  const sorted = hand.sort(sortByValue)
  return {
    result: hand.length === 5 && isConsecutive(sorted) === expected,
    matched: sorted,
    unmatched: []
  }
}
