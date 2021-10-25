import { Matcher } from '~/matchers/Matcher'
import { CompositeMatcher } from '~/matchers/composites/CompositeMatcher'
import { FaceMatcher } from '~/matchers/composites/FaceMatcher'
import { Group } from '~/Group'
import { SuitMatcher } from '~/matchers/composites/SuitMatcher'
import { RepeatMoreThanMatcher } from '~/matchers/repeats/RepeatMoreThanMatcher'
import { ConsecutiveMatcher } from '~/matchers/ConsecutiveMatcher'
import { RepeatEqualMatcher } from '~/matchers/repeats/RepeatEqualMatcher'
import { Card } from '~/Card'
import { Hand } from '~/Hand'

const repeating = (n: number) => (cs: Card[]) => cs.length === n

export class Matchers {
  static compose<T>(a: Matcher<T>, ...bs: Matcher<T>[]) {
    return new CompositeMatcher<T>(a, bs)
  }

  static faces(primary: Matcher<Group>, ...secondary: Matcher<Group>[]): Matcher<Hand> {
    return new FaceMatcher(primary, secondary)
  }

  static suits(primary: Matcher<Group>, ...secondary: Matcher<Group>[]): Matcher<Hand> {
    return new SuitMatcher(primary, secondary)
  }

  static consecutive() {
    return new ConsecutiveMatcher()
  }

  static notConsecutive() {
    return new ConsecutiveMatcher(false)
  }

  static moreThanOne() {
    return new RepeatMoreThanMatcher(1)
  }

  static single(count: number) {
    return new RepeatEqualMatcher(repeating(1), count)
  }

  static double(count: number) {
    return new RepeatEqualMatcher(repeating(2), count)
  }

  static triple(count: number) {
    return new RepeatEqualMatcher(repeating(3), count)
  }

  static quad(count: number) {
    return new RepeatEqualMatcher(repeating(4), count)
  }

  static quint(count: number) {
    return new RepeatEqualMatcher(repeating(5), count)
  }
}
