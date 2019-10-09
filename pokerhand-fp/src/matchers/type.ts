import { Hand } from '~/card'

export type MatchingResult = {
  result: boolean
  matched: Hand
  unmatched: Hand
}

export type Matcher<T> = (t: T) => MatchingResult