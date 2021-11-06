import { Card } from '~/Card'
import { Group } from '~/Group'
import { Rank } from '~/ranks/Rank'
import { Ranks } from '~/ranks/Ranks'

export class Hand {
  private readonly _cards: Card[]

  constructor(cards: Card[]) {
    this._cards = cards.sort(Card.comparable)
  }

  get rank(): Rank {
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
    return this.cards.every((card, idx) => {
      return idx === 0
          ? true
          : Math.abs(card.face - this.cards[idx - 1].face) === 1
    })
  }

  get cards() {
    return this._cards
  }

  get size() {
    return this.cards.length
  }

  duel(h: Hand): string {
    return this.rank.duel(h.rank)
      || this.matchedRank.duelHighCard(h.rank.name, h.matchedRank)
      || this.unMatchedRank.duelHighCard(h.rank.name, h.unMatchedRank)
      || 'Tie'
  }

  private duelHighCard(rankName: string, h: Hand): Nullable<string> {
    for (let i = 0; i < this.size; i++) {
      if (this.cards[i].face > h.cards[i].face) {
        return `You win: ${rankName} with ${this.cards[i].face} > ${h.cards[i].face}`
      } else if (this.cards[i].face < h.cards[i].face) {
        return `You lose: ${rankName} with ${this.cards[i].face} < ${h.cards[i].face}`
      }
    }
    return null
  }
}
