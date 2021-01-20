// You are given a two-digit integer n. Return the sum of its digits.

// Example

// For n = 29, the output should be
// addTwoDigits(n) = 11.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// A positive two-digit integer.

// Guaranteed constraints:
// 10 ≤ n ≤ 99.

// [output] integer

// The sum of the first and second digits of the input number.

                  // n is 2 digit integer
function addTwoDigits(n) {
    let stringN = n.toString()
    sum = 0
    for(let i of stringN) {
        sum += Number(i)
    }

    return sum;
}

let answer = addTwoDigits(21)
console.log(answer)