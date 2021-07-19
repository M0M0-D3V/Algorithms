// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

// example:
// arr = [1, 1, 0, -1, -1]

// there are n = 5 elements, 2 positive, 2 negatives and one zero. Teir ratios are 2/5 = 0.400000, 2/5 = 0.400000 and 1/5 = 0.2.....

// results are printed as:
// 0.400000
// 0.400000
// 0.200000

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let countArray = [0, 0, 0]
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            countArray[0]++
        }
        else if(arr[i] < 0) {
            countArray[1]++
        }
        else if(arr[i] === 0) {
            countArray[2]++
        }
    }
    for(let result of countArray) {
        console.log((result / arr.length).toFixed(6))
    }
}

plusMinus([1, 1, 0, -1, -1])