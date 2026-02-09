/*
  Write a function `compression` which takes a string as input and returns a compressed version of the string. The compression is done by replacing consecutive repeating characters with the character followed by the count of repetitions. If a character does not repeat, it is not followed by a count.

  Example:
  - Input: "aaabbbbcccvvmm"
  - Output: "a3b4c3v2m2"

  - Input: "abc"
  - Output: "abc"

  - Input: "aabbcc"
  - Output: "a2b2c2"

  - Input: ""
  - Output: ""

  Note:
  - The function should work for any alphanumeric string.

  Once you've implemented the logic, test your code by running
  - `npm run test-compressString`
*/

// edge case of 1 and empty string 

function compression(str) {
  // Your code here
  let ans = ""
  let count = 1

  for(let i=0;i<str.length;i++){
    if( ( i!=str.length-1 ) &&  (str[i] != str[i+1])){
      ans += str[i]
      if(count != 1)ans += count.toString(10)
      count = 1
    }
    else if( i != str.length-1){
      count++
    }
  }

  if(str != "") ans +=  str[str.length-1]
  if(count != 1)ans += count.toString(10)

  return ans 
}

module.exports = compression;