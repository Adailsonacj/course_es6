import R from 'ramda';
import * as _ from 'ramda'

const arr1 = [1,1,1,2,2,3,4,5,6,6]
const arr2 = [5,6,6,6,7,7,8,9,10,1]

const arr3 = _.union(arr1, arr2)

const arr4 = _.uniq(arr1)

console.log(arr4)
console.log(arr3)