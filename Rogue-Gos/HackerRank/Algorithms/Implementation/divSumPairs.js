// Given an array of integers and a positive integer k, determine the number of (i, j) pairs where i < j and ar[i] + ar[j] is divisible by k.

// Example
// ar = [1, 2, 3, 4, 5, 6]
// k = 5

// Three pairs meet the criteria: [1, 4], [2, 3], and [4, 6].

// Function Description

// Complete the divisibleSumPairs function in the editor below.

/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER number of pairs.
 * The function accepts following parameters:
 *  1. INTEGER n - this is length of ar
 *  2. INTEGER k - denominator
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n, k, ar) {
    // loop compares each value with each other
    let newArr = []
    for(let i = 0; i < n - 1; i++) {
        for(let j = i + 1; j < n; j++) {
            if((ar[i] + ar[j]) % k == 0) {
                newArr.push([ar[i], ar[j]])
            }
        }
    }
    return newArr.length;
}

console.log(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6]))