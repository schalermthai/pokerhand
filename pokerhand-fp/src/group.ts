import * as _ from 'lodash/fp'
import { Hand, sortByValue } from '~/card'

export type Group = { [x: string]: Hand }
export type GroupBy = (h:Hand) => Group

export const groupBySuit: GroupBy = _.memoize(_.groupBy(c => c.suit))
export const groupByFace: GroupBy = _.memoize(_.groupBy(c => c.face))

export const count = (g: Group) => Object.keys(g).length

export const filterBy = _.pickBy

export const values: (g: Group) => Hand =
    g => _.flatten(Object.values(g)).sort(sortByValue)

export const valueSizeEq = (size: number) => (h: Hand) => size === h.length
export const valueSizeNotEq = (size: number) => (h: Hand) => size !== h.length
