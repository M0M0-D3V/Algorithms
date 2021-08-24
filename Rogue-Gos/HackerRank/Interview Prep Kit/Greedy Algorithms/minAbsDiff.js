// Given an array of integers, find the minimum absolute difference between any two elements in the array.

// Function Description

// Complete the minimumAbsoluteDifference function in the editor below. It should return an integer that represents the minimum absolute difference between any pair of elements.

// minimumAbsoluteDifference has the following parameter(s):

// int arr[n]: an array of integers
// Returns

// int: the minimum absolute difference found


/*
 * Complete the 'minimumAbsoluteDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
function minimumAbsoluteDifference(arr) {
    if(arr.length < 2) {
        return arr[0]
    }
    let absMin = Math.abs(arr[0] - arr[1])
    let diff = 0
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            diff = Math.abs(arr[i] - arr[j])
            if(diff < absMin) {
                absMin = diff
            }
        }
    }
    return absMin
}

console.log(minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -54, 75]))