import { Matcher } from '~/matchers/Matcher'

export class CompositeMatcher<T> implements Matcher<T> {
  private secondaries: Matcher<T>[]

  constructor(private primary: Matcher<T>, secondaries: Matcher<T>[]) {
    this.secondaries = secondaries || []
  }

  isMatches(t: T) {
    return (
      this.primary.isMatches(t) && this.secondaries.every(m => m.isMatches(t))
    )
  }

  matched(t: T) {
    return this.primary.matched(t)
  }

  unmatched(t: T) {
    return this.primary.unmatched(t)
  }
}
