/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
   let ansNum = -Infinity

   for(const num of numbers){
    if(ansNum < num) ansNum = num
   }

   if(ansNum === -Infinity)return undefined

   return ansNum
}

module.exports = findLargestElement;