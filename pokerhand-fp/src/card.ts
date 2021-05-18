import * as _ from 'lodash/fp'


export type Suit = 'C' | 'D' | 'H' | 'S'

export type Face =
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | 'T'
  | 'J'
  | 'Q'
  | 'K'
  | 'A'

export type Card = {
  face: Face
  suit: Suit
}

export type Hand = Card[]

export const cardValue = (c: Card) => '23456789TJQKA'.indexOf(c.face) + 2

export const sortByValue = (a: Card, b: Card) => cardValue(b) - cardValue(a)

export const isConsecutive = (h: Hand) => {
  const fold: (c: Card, h: Hand) => boolean = (c, h) => {
    if (h.length === 0) return true
    if (cardValue(c) - 1 === cardValue(h[0])) return fold(_.head(h), _.tail(h))
    else return false
  }

  return fold(_.head(h), _.tail(h))
}
