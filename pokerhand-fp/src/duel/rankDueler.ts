import { RankMatcherResult } from '~/matchers/rank'
import { highCard } from '~/ranks/highCards'
import { pair } from '~/ranks/pair'
import { twoPairs } from '~/ranks/twoPairs'
import { threeOfKind } from '~/ranks/threeOfKind'
import { straight } from '~/ranks/straight'
import { flush } from '~/ranks/flush'
import { fullHouse } from '~/ranks/fullHouse'
import { straightFlush } from '~/ranks/straightFlush'
import { Hand } from '~/card'
import { fourOfKind } from '~/ranks/fourOfKind'

const ranks = [
  highCard,
  pair,
  twoPairs,
  threeOfKind,
  straight,
  flush,
  fullHouse,
  fourOfKind,
  straightFlush
]

export const matchRank = (h: Hand) => ranks.map(m => m(h)).find(r => r.result)

export const rankDueler = (r1: RankMatcherResult, r2: RankMatcherResult) => {
  if (r1.value > r2.value) return `${r1.name}: ${r1.matched[0].face}`
  else if (r1.value < r2.value) return `${r2.name}: ${r2.matched[0].face}`
  return undefined
}
