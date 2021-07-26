// Function Description

// Complete the function hourglassSum in the editor below.

// hourglassSum has the following parameter(s):

// int arr[6][6]: an array of integers
// Returns

// int: the maximum hourglass sum

// Sample Input

/* [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
    ]
*/
// Sample Output

// 19

// First hourglass coordinates: [0, 0], [0, 1], [0, 2], [1, 1], [2, 0], [2, 1], [2, 2] 
/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
    let maxSum = arr[0][0] +  arr[0][1] +  arr[0][2] +  arr[1][1] +  arr[2][0] +  arr[2][1] +  arr[2][2]
    for(let i = 0; i < arr.length - 2; i++) {
        let tempSum = 0;
        for(let j = 0; j < arr.length - 2; j++) {
            tempSum = arr[i][j] +  arr[i][j + 1] +  arr[i][j + 2] +  arr[i + 1][j + 1] +  arr[i + 2][j] +  arr[i + 2][j + 1] +  arr[i + 2][j + 2]
            if(tempSum > maxSum) {
                maxSum = tempSum
            }
        }
    }
    return maxSum
}

console.log(hourglassSum([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
    ]))