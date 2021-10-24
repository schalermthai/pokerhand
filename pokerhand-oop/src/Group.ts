import { Hand } from '~/Hand'
import { groupBy, pickBy, flatten } from 'lodash'
import { Card } from "~/Card";

export class Group {
  static groupByValue(hand: Hand): Group {
    const grouped = groupBy(hand.cards,(c: Card) => c.face)
    return new Group(grouped)
  }

  static groupBySuit(hand: Hand): Group {
    return new Group(groupBy(hand.cards, card => card.suit))
  }
  constructor(private readonly group: Partial<Hand>) {}


  countKeys(): number {
    return Object.keys(this.group).length
  }

  filter(predicate: (vs: Card[]) => boolean): Group {
    return new Group(pickBy(this.group, predicate))
  }

  values(): Hand {
    return new Hand(flatten(Object.values(this.group as Hand)))
  }
}
