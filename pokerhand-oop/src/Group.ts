import fp from 'lodash/fp'
import { GroupedCardByFace, GroupedCardBySuit } from "~/@types/groups";
import { Hand } from '~/Hand'
import { Card } from '~/Card'

const groupBy = <T>(key: keyof T) => fp.groupBy<T>((t) => t[key])

export class Group {
  static groupByValue(hand: Hand): Group {
    const groupByFace = groupBy<Card>('face')
    return new Group(groupByFace(hand.cards))
  }

  static groupBySuit(hand: Hand): Group {
    const groupBySuit = groupBy<Card>('suit')
    return new Group(groupBySuit(hand.cards))
  }

  constructor(private readonly group: GroupedCardBySuit | GroupedCardByFace) {}

  countKeys(): number {
    return Object.keys(this.group).length
  }

  filter(predicate: (vs: Card[]) => boolean): Group {
    return new Group(fp.pickBy(predicate)(this.group))
  }

  values(): Hand {
    return new Hand(fp.flatten(Object.values(this.group as Hand)))
  }
}
