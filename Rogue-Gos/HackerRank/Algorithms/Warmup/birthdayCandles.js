// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

// Function Description

// Complete the function birthdayCakeCandles in the editor below.

// birthdayCakeCandles has the following parameter(s):

// int candles[n]: the candle heights
// Returns

// int: the number of candles that are tallest

/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    let count = 0
    let max = candles[0]
    for(let i = 0; i < candles.length; i++) {
        if(max < candles[i]) {
            max = candles[i]
        }
    }
    for(let candle of candles) {
        if(max === candle) {
            count++
        }
    }
    return count
}

console.log(birthdayCakeCandles([4, 4, 1, 3]))