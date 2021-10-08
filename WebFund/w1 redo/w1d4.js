/*
  Given an array of integers
  return the index where the smallest integer is located
  return -1 if there is no smallest integer (array is empty)
  since -1 is not a valid index, this indicates it couldn't be found
  If the smallest integer occurs more than once, return the index of the first one.
*/

const nums1 = [5, 2, 3]
// const expected1 = 1

// const nums2 = [5, 2, 2, 3]
// const expected2 = 1

const nums3 = []
// const expected3 = -1

function indexOfMinVal(nums) {
    // code here
    if(nums.length < 1) {
      return -1
    }
    let minIdx = 0
    let min = nums[0]
    for(let i = 1; i < nums.length; i++) {
      if(min > nums[i]) {
        min = nums[i]
        minIdx = i
      }
    }
    return minIdx
  }
  console.log(indexOfMinVal(nums1))
  console.log(indexOfMinVal(nums3))
  
  /* ******************************************************************************** */
  
  /*
    Array: Second-Largest
    Return the second-largest element of an array, or null if there is none.
    Bonus: do it with one loop and no nested loops
  */
  
  const nums1z = [2, 3, 1, 4]
  // const expected1 = 3
  
  // const nums2 = [3, 3]
  // const expected2 = null
  
  // const nums3 = [2]
  // const expected3 = null
  
  // const nums4 = []
  // const expected4 = null
  
  function secondLargest(nums) {
    // code here
    if(nums.length < 2) {
      return null
    }
    let max = nums[0]
    let max2
    for(let i = 1; i < nums.length; i++) {
      if(max < nums[i]) {
        max2 = max
        max = nums[i]
      }
    }
    return max2
  }
  console.log(secondLargest(nums1z))