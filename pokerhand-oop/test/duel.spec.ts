import { Hand } from '~/Hand'
import { Card, Face, Suit } from '~/Card'

describe('duel', () => {
  const highCard = new Hand([
    new Card(Face._2, Suit.S),
    new Card(Face._7, Suit.C),
    new Card(Face._4, Suit.S),
    new Card(Face._6, Suit.S),
    new Card(Face._8, Suit.S)
  ])

  const pair1 = new Hand([
    new Card(Face._2, Suit.S),
    new Card(Face._2, Suit.C),
    new Card(Face._4, Suit.S),
    new Card(Face._6, Suit.S),
    new Card(Face._8, Suit.S)
  ])

  const pair2 = new Hand([
    new Card(Face._3, Suit.S),
    new Card(Face._3, Suit.C),
    new Card(Face._4, Suit.S),
    new Card(Face._6, Suit.S),
    new Card(Face._8, Suit.S)
  ])

  const pair3 = new Hand([
    new Card(Face._3, Suit.S),
    new Card(Face._3, Suit.C),
    new Card(Face._4, Suit.S),
    new Card(Face._6, Suit.S),
    new Card(Face._9, Suit.S)
  ])

  it('pair > highCard', () => {
    expect(pair1.duel(highCard)).toEqual('You win: Pair > High Card')
    expect(highCard.duel(pair1)).toEqual('You lose: High Card < Pair')
  })

  it('pair of 2 vs pair of 3: higher pair wins', () => {
    expect(pair2.duel(pair1)).toEqual('You win: Pair with 3 > 2')
    expect(pair1.duel(pair2)).toEqual('You lose: Pair with 2 < 3')
  })

  it('pair of 3 vs pair of 3: higher high card wins', () => {
    expect(pair3.duel(pair2)).toEqual('You win: Pair with 9 > 8')
    expect(pair2.duel(pair3)).toEqual('You lose: Pair with 8 < 9')
  })

  it('pair vs pair: Tie', () => {
    expect(pair1.duel(pair1)).toEqual('Tie')
    expect(pair2.duel(pair2)).toEqual('Tie')
    expect(pair3.duel(pair3)).toEqual('Tie')
  })
})
