export enum Face {
  _2 = 2,
  _3,
  _4,
  _5,
  _6,
  _7,
  _8,
  _9,
  _T,
  _J,
  _Q,
  _K,
  _A
}

export enum Suit {
  CLUB = 'club',
  DIAMONDS = 'diamonds',
  HEART = 'heart',
  SPADE = 'spade'
}

export class Card {
  constructor(public readonly face: Face, public readonly suit: Suit) {}

  static comparable = (card1: Card, card2: Card) => card2.face - card1.face
}
