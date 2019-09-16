import * as _ from 'lodash/fp'
import { Card, sortByValue } from '~/card'

export const groupBySuit = _.memoize(_.groupBy(c => c.suit))
export const groupByFace = _.memoize(_.groupBy(c => c.face))

export const count = o => Object.keys(o).length
export const filterBy = _.pickBy

export const values: (o: Group) => Card[] = o =>
  _.flatten(Object.values(o)).sort(sortByValue)

export const valueSizeEq = n => vs => n === vs.length
export const valueSizeNotEq = n => vs => n !== vs.length

export type Group = { [x: string]: Card[] }
