import { RankMatcherResult } from '~/ranks/rank'
import { cardValue } from '~/card'
import { foldUntil } from '~/foldUntil'
import * as _ from 'lodash/fp'

const win = (name, v1, v2) => `${name}: ${v1.face} over ${v2.face}`

export const valueDueler = values => (
  r1: RankMatcherResult,
  r2: RankMatcherResult
) => {
  const r1Values = values(r1)
  const r2Values = values(r2)

  return foldUntil(v => v !== undefined)(v => {
    if (cardValue(v[0]) > cardValue(v[1])) return win(r1.name, v[0], v[1])
    else if (cardValue(v[0]) < cardValue(v[1])) return win(r2.name, v[1], v[0])
    else return undefined
  })(_.zip(r1Values, r2Values))
}
