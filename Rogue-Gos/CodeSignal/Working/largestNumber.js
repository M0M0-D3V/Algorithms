// Given an integer n, return the largest number that contains exactly n digits.

// Example

// For n = 2, the output should be
// largestNumber(n) = 99.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// Guaranteed constraints:
// 1 ≤ n ≤ 9.

// [output] integer

// The largest integer of length n.
                    // n is an integer type
function largestNumber(n) {
    
    let largest = ""
    for(let i = 0; i < n; i++) {
        largest += '9'
    }
    return Number(largest)
}

const answer = largestNumber(2)
console.log(answer)