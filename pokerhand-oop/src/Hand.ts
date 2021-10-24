import { Card } from '~/Card'
import { Group } from '~/Group'
import { Rank } from '~/ranks/Rank'
import { Ranks } from '~/ranks/Ranks'

export class Hand {
  private readonly _cards: Card[]

  private static foldUntilFound(plans: Array<() => string>) {
    return plans.reduce((
        acc: Function,
        n: () => string,
        i: number,
        arr
    ) => {
      console.log('acc', acc())
      const result = acc()
      if (result) {
        arr.splice(i) // break loop by splice
        return result
      }
      return n
    })
  }

  constructor(cards: Card[]) {
    this._cards = cards.sort(Card.comparable)
  }

  get rank(): Rank {
    // @ts-ignore
    return Ranks.create(this)
  }

  get matchedRank(): Hand {
    return this.rank.matcher.matched(this)
  }

  get unMatchedRank(): Hand {
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

  duel(h: Hand): () => string {
    const plan: Array<() => string> = [
      () => this.rank.duel(h.rank)!,
      () => this.matchedRank.duelHighCard(h.rank.name, h.matchedRank)!,
      () => this.unMatchedRank.duelHighCard(h.rank.name, h.unMatchedRank)!,
      () => 'Tie'
    ]

    return Hand.foldUntilFound(plan)!
  }

  private duelHighCard(rankName: string, h: Hand): string | undefined {
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
