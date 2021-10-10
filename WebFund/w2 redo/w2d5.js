/*
  Input: a 2 dimensional array of integers
  Output: A 1 dimensional array of all the same elements preserving original order
*/

// this given array has a length of 3 because it has 3 arrays as items
const twoDimArr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// const expected1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const twoDimArr2 = [[1], [2], [3]]
// const expected2 = [1, 2, 3]

const twoDimArr3 = [[], [], [10, 20]];
// const expected3 = [10, 20]

function flatten2dArray(twoDimArr) {
  // code here
  let newArr = []
  for(let i = 0; i < twoDimArr.length; i++) {
    newArr.push(...twoDimArr[i])
    // for(let j = 0; j < twoDimArr[i].length; j++) {
    //   newArr.push(twoDimArr[i][j])
    // }
  }
  return newArr
}
console.log(flatten2dArray(twoDimArr1))

/*****************************************************************************/

/*
    Input: Two arrays of equal length containing integers
    Output: A new array where each item is the sum of
    the items in arr1 and arr2 at that same index
   */

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
// const expected = [2, 4, 6]

function sumArrColumns(nums1, nums2) {
  // code here
  let newArr = []
  for(let i = 0; i < nums1.length; i++) {
    newArr.push(nums1[i] + nums2[i])
  }
  return newArr
}

console.log(sumArrColumns(arr1, arr2))
