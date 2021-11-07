// Recursion

// Base case(s)
// Forward movement

// return value or function call
// Call Stack
// Pass by value/reference

/* ******************************************************************************** */

/*
  Recursively sum an arr of ints
*/

// const nums1 = [1, 2, 3]
// const expected1 = 6

// add params if needed for recursion

function sumArr(nums, sum = 0) {
  // code here
  if(nums.length < 1) {
    return sum
  }
  sum += nums.shift()
  return sumArr(nums, sum)
}
console.log(sumArr([1, 2, 3]))
/* ******************************************************************************** */

/*
        Recursive Sigma
      
        Input: integer
        Output: sum of integers from 1 to Input integer
      
      */

// const num1 = 5
// const expected1 = 15
// // Explanation: (1+2+3+4+5)

// const num2 = 2.5
// const expected2 = 3
// // Explanation: (1+2)

// const num3 = -1
// const expected3 = 0

function recursiveSigma(n, sum = 0) {
  // code here
  n = Math.floor(n)
  if(n < 1) {
    return sum
  }
  sum += n
  n--
  return recursiveSigma(n, sum)
}
console.log(recursiveSigma(11))