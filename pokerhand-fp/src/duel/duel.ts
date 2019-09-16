import { Hand } from '~/card'
import { matchRank, rankDueler } from '~/duel/rankDueler'
import { valueDueler } from '~/duel/valueDueler'
import { foldUntil } from '~/foldUntil'

const duelers = [
  rankDueler,
  valueDueler(r => r.primary),
  valueDueler(r => r.secondary)
]

export const duel = (h1: Hand, h2: Hand) => {
  const r1 = matchRank(h1)
  const r2 = matchRank(h2)

  return foldUntil(v => v)(duel => {
    return duel(r1, r2)
  })(duelers, 'Tie.')
}
