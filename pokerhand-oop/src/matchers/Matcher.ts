import { Hand } from '~/Hand'

export interface Matcher<T> {
  isMatches(t: T): boolean
  matched(t: T): Hand
  unmatched(t: T): Hand
}
