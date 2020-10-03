// Given two arrays of integers, find the pair of values with the smallest difference and return that difference.

// If both arrays are empty, return -1.

// If one array is empty, return the smallest value from the non-empty array.

// Note: Try to solve this without brute force.

// Example:

//   arr1 = [1, 3, 5, 23, 5]
//   arr2 = [45, 34, 67, 2, 0]

//   Output = 1

// Example empty array:

//   arr1 = [1, 3, 5, 23, 5]
//   arr2 = []

//   Output = 1

// Example two empty arrays:

//   arr1 = []
//   arr2 = []

//   Output = -1

function smallestDiff(arr1, arr2) {
    if (arr1.length == 0 && arr2.length == 0) {
        return -1
    }
    if (arr1.length == 0) {
        return getMin(arr2)
    } else if (arr2.length == 0) {
        return getMin(arr1)
    }
    let smallest = Math.abs(arr1[0] - arr2[0])
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (Math.abs(arr1[i] - arr2[j]) < smallest) {
                smallest = Math.abs(arr1[i] - arr2[j])
            }
        }
    }
    return smallest
}

function getMin(arr) {
    min = arr[0]
    for (num of arr) {
        if (min > num) {
            min = num
        }
    }
    return min
}

console.log(smallestDiff([], []))