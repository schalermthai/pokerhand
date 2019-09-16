import { Matcher } from '~/matchers/type'
import { Hand } from '~/card'
import * as _ from 'lodash/fp'

export const matchers = (...matchers: Matcher[]) => (hand: Hand) => ({
  result: matchers.every(m => m(hand).result),
  primary: matchers.reduce(
    (acc, m) => _.uniq([...acc, ...m(hand).primary]),
    []
  ),
  secondary: matchers.reduce(
    (acc, m) => _.uniq([...acc, ...m(hand).secondary]),
    []
  )
})
