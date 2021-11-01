/*
  Array: Binary Search (non recursive)

  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted.
*/

// const nums1 = [1, 3, 5, 6]
// const searchNum1 = 4
// const expected1 = false

// const nums2 = [4, 5, 6, 8, 12]
// const searchNum2 = 5
// const expected2 = true

// const nums3 = [3, 4, 6, 8, 12]
// const searchNum3 = 3
// const expected3 = true

// const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9]
// const searchNum4 = 2
// const expected4 = true

function binarySearch(sortedNums, searchNum) {
  // code here
  while(sortedNums.length > 1) {

    let midIdx = Math.floor(sortedNums.length / 2) - 1
    if(searchNum == sortedNums[midIdx]) {
      return true
    }
  if(searchNum > sortedNums[midIdx]) {
    for(let i = 0; i < sortedNums.length - 1; i++){
      sortedNums[i] = sortedNums[midIdx + i + 1]
      console.log(sortedNums)
    }
  }
  sortedNums.length = midIdx + 1
  console.log(sortedNums)
}
  return false
}
console.log(binarySearch([1, 3, 5, 6], 4))