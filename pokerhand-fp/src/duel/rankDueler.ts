import { RankMatcherResult, rankValues } from '~/ranks/rank'
import { highCard } from '~/ranks/highCards'
import { pair } from '~/ranks/pair'
import { twoPairs } from '~/ranks/twoPairs'
import { threeOfKind } from '~/ranks/threeOfKind'
import { straight } from '~/ranks/straight'
import { flush } from '~/ranks/flush'
import { fullHouse } from '~/ranks/fullHouse'
import { straightFlush } from '~/ranks/straightFlush'
import { Hand } from '~/card'

const all = [
  highCard,
  pair,
  twoPairs,
  threeOfKind,
  straight,
  flush,
  fullHouse,
  straightFlush
]

export const matchRank = (h: Hand) => all.map(m => m(h)).find(r => r.result)

export const rankDueler = (r1: RankMatcherResult, r2: RankMatcherResult) => {
  if (rankValues(r1.name) > rankValues(r2.name))
    return `${r1.name}: ${r1.primary[0].face}`
  else if (rankValues(r1.name) < rankValues(r2.name))
    return `${r2.name}: ${r2.primary[0].face}`
  return undefined
}
