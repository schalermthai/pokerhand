import { Hand } from '~/Hand'

export abstract class Rank {
  abstract name: string
  abstract matches(hand: Hand): boolean
}
