import { Card } from '~/Card'
import { Group } from '~/Group'
import { Rank } from '~/ranks/Rank'
import { Ranks } from '~/ranks/Ranks'

export class Hand {
  private readonly _cards: Card[]

  constructor(cards: Card[]) {
    this._cards = cards.sort((c1, c2) => c2.face - c1.face)
  }

  rank(): Rank {
    // @ts-ignore
    return Ranks.create(this)
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
    return this._cards.length
  }

  compareTo(h: Hand) {
    for (let i = 0; i < this.size; i++) {
      if (this.cards[i].face > h.cards[i].face)
        return this.cards[i].face - h.cards[i].face
      else if (this.cards[i].face < h.cards[i].face)
        return h.cards[i].face - this.cards[i].face
    }

    return 0
  }
}
