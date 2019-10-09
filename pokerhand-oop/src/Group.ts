import { Hand } from '~/Hand'
import * as _ from 'lodash'
import { Card } from '~/Card'

export class Group {
  private readonly group: Hand

  static groupByValue(hand: Hand): Group {
    return new Group(_.groupBy(hand.cards, c => c.face))
  }

  static groupBySuit(hand: Hand): Group {
    return new Group(_.groupBy(hand.cards, c => c.suit))
  }

  constructor(group) {
    this.group = group
  }

  countKeys() {
    return Object.keys(this.group).length
  }

  filter(f: (vs: Card[]) => boolean) {
    return new Group(_.pickBy(this.group, f))
  }

  values(): Hand {
    return new Hand(_.flatten(Object.values(this.group)))
  }
}
