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
  C = 'C',
  D = 'D',
  H = 'H',
  S = 'S'
}

export class Card {
  constructor(public readonly face: Face, public readonly suit: Suit) {}

  static comparable = (c1: Card, c2: Card) => c2.face - c1.face
}
