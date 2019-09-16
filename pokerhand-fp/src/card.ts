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
