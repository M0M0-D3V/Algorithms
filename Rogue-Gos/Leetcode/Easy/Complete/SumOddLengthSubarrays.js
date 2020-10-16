// Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

// A subarray is a contiguous subsequence of the array.

// Return the sum of all odd-length subarrays of arr.



// Example 1:

// Input: arr = [1,4,2,5,3]
// Output: 58
// Explanation: The odd-length subarrays of arr and their sums are:
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

/*
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
    let sum = 0;
    len = 1;
    while(len < arr.length+1) {
        for(let i = 0; i < arr.length; i++) {
            if((i + len - 1) < arr.length) {
                let piece = arr.slice(i, i + len)
                sum += piece.reduce((a, b) => {return a + b})
            }
        }
        len +=2
    }
    return sum
}

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]))

// THINKING PROCESS
// Make a variable to control the length to stay odd
// 