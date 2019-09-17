import { Card } from '~/Card'
import { Group } from '~/Group'
import { Rank } from '~/ranks/Rank'
import { Ranks } from '~/ranks/Ranks'

export class Hand {
  private readonly _cards: Card[]

  constructor(cards: Card[]) {
    this._cards = cards.sort((c1, c2) => c2.face - c1.face)
  }

  get rank(): Rank {
    // @ts-ignore
    return Ranks.create(this)
  }

  get matchedRank() {
    return this.rank.matcher.matched(this)
  }

  get unMatchedRank() {
    return this.rank.matcher.unmatched(this)
  }

  groupByValue(): Group {
    return Group.groupByValue(this)
  }

  groupBySuit(): Group {
    return Group.groupBySuit(this)
  }

  get isConsecutive(): boolean {
    for (let i = 0; i < this.cards.length - 1; i++) {
      if (this.cards[i].face - 1 !== this.cards[i + 1].face) return false
    }
    return true
  }

  get cards() {
    return this._cards
  }

  get size() {
    return this.cards.length
  }

  duel(h: Hand) {
    const plan = [
      () => this.rank.duel(h.rank),
      () => this.matchedRank.highCardDuel(h.rank.name, h.matchedRank),
      () => this.unMatchedRank.highCardDuel(h.rank.name, h.unMatchedRank),
      'Tie'
    ]

    return plan.slice(0).reduce((acc, n, i, arr) => {
      // @ts-ignore
      const result = acc()
      if (result) {
        arr.splice(i)
        return result
      }
      return n
    })
  }

  private highCardDuel(rankName: string, h: Hand) {
    for (let i = 0; i < this.size; i++) {
      if (this.cards[i].face > h.cards[i].face) {
        return `You win: ${rankName} with ${this.cards[i].face} > ${h.cards[i].face}`
      } else if (this.cards[i].face < h.cards[i].face) {
        return `You lose: ${rankName} with ${this.cards[i].face} < ${h.cards[i].face}`
      }
    }
    return undefined
  }
}
