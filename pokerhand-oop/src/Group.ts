import { Hand } from '~/Hand'
import * as _ from 'lodash'

export class Group {
  private readonly group

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

  single() {
    return new Group(_.pickBy(this.group, vs => vs.length === 1))
  }

  double() {
    return new Group(_.pickBy(this.group, vs => vs.length === 2))
  }

  triple() {
    return new Group(_.pickBy(this.group, vs => vs.length === 3))
  }

  quadruple() {
    return new Group(_.pickBy(this.group, vs => vs.length === 4))
  }

  quintuple() {
    return new Group(_.pickBy(this.group, vs => vs.length === 5))
  }
}
