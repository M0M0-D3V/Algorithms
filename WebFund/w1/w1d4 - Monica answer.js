/*
  Given an array of integers
  return the index where the smallest integer is located
  return -1 if there is no smallest integer (array is empty)
  since -1 is not a valid index, this indicates it couldn't be found
  If the smallest integer occurs more than once, return the index of the first one.
*/

// const nums1 = [5, 2, 3]
// const expected1 = 1

// const nums2 = [5, 2, 2, 3]
// const expected2 = 1

// const nums3 = []
// const expected3 = -1

function indexOfMinVal(nums) {
    // code here
    // return -1 if array is empty
    if(nums.length == 0) {
      return -1
    }
    // return the index where smallest is located
    var min = 0
    for(var i = 1; i < nums.length; i++) {
      if(nums[min] > nums[i]) {
        min = i
      }
    }
    return min
  }
  // run below
  // var result1 = indexOfMinVal(nums1)
  // console.log(indexOfMinVal(result1)
    // var result2 = indexOfMinVal(nums2)
  // console.log(indexOfMinVal(result2)
      // var result3 = indexOfMinVal(nums3)
  // console.log(indexOfMinVal(result3)
  /* ******************************************************************************** */
  
  /*
    Array: Second-Largest
    Return the second-largest element of an array, or null if there is none.
    Bonus: do it with one loop and no nested loops
  */
  
  // const nums5 = [2, 3, 1, 4]
  // const expected1 = 3
  
  // const nums6 = [3, 3]
  // const expected2 = null
  
  // const nums7 = [2]
  // const expected3 = null
  
  // const nums8 = []
  // const expected4 = null
  
  function secondLargest(nums) {
    // code here
    // secondlargest means there must be at least 2 elements in array
    // return null if nums has less than 2 length
    if(nums.length < 2) {
      return null
    }
    var largest = nums[0]
    var second = nums[0]
    for(var i = 1; i < nums.length; i++) {
      if(largest < nums[i]) {
        second = largest
        largest = nums[i]
      }
    }
    return second
  }
// var result5 = secondLargest(nums5)
// console.log(result5)
// var result6 = secondLargest(nums6)
// console.log(result6)
// var result7 = secondLargest(nums7)
// console.log(result7)
// var result8 = secondLargest(nums8)
// console.log(result8)