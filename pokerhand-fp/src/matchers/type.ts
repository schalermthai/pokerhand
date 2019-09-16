import { Card, Hand } from '~/card'

export type MatchingResult = {
  result: boolean
  primary: Card[]
  secondary: Card[]
}

export type Matcher = (hand: Hand) => MatchingResult
