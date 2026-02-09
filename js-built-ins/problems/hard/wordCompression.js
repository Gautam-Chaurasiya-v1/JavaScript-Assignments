/*
  Write a function `compressWords` which takes an array of strings as input and returns a new array with consecutive duplicate elements compressed. If an element appears consecutively, it is replaced by the element followed by the count of its occurrences.

  Example:
  - Input: ["apple", "apple", "banana", "banana", "banana", "cherry", "apple", "apple"]
  - Output: ["apple2", "banana3", "cherry", "apple2"]

  - Input: ["cat", "dog", "dog", "dog", "cat"]
  - Output: ["cat", "dog3", "cat"]

  - Input: ["one", "two", "three"]
  - Output: ["one", "two", "three"]

  - Input: []
  - Output: []

  Note:
  - The function should handle empty arrays and arrays with no consecutive duplicates.

  Once you've implemented the logic, test your code by running
  - `npm run test-compressWord`
*/

// edge case - empty array + no duplicates 
function compressWords(arr) {
  // Your code here
  let count = 1
  const ans = []
  const n = arr.length

  for (let i = 0; i < n; i++) {
    if ((i != n - 1) && (arr[i] != arr[i + 1])) {
      let ele = arr[i]
      if (count > 1) ele += count.toString(10)
      ans.push(ele)
      count = 1
    }
    else if (i != n - 1) {
      count++
    }
  }

  if (arr.length > 0) {
    let ele = arr[n - 1]
    if (count > 1) ele += count.toString(10)
    ans.push(ele)
  }

  
  return ans

}


module.exports = compressWords;
