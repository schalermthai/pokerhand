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
  CLUB = 'C',
  DIAMONDS = 'D',
  HEART = 'H',
  SPADE = 'S'
}

export class Card {
  constructor(public readonly face: Face, public readonly suit: Suit) {}

  static comparable = (a: Card, b: Card) => b.face - a.face
}
