/*
  Given an array and an index,
  remove the item at that index.
  return the removed item

  No built-in array methods except pop().
*/

const arr2 = ["a", "b", "c"]
const removeIdx2 = 3
// const expected2 = null
// const arr2Expected = ["a", "b", "c"]

// const arr3 = ["a", "b", "c"]
// const removeIdx3 = -3
// const expected3 = null
// const arr3Expected = ["a", "b", "c"]

function removeAt(arr, idx) {
  // your code here
  if(idx > arr.length - 1) {
    return null
  }
  let item = arr[idx]
  for(let i = idx; i < arr.length - 1; i++) {
    let temp = arr[i + 1]
    arr[i + 1] = arr[i]
    arr[i] = temp
  }
  arr.length--
  console.log(arr)
  return item
}

const arr1 = ["a", "b", "c"]
const removeIdx1 = 1

console.log(removeAt(arr1, removeIdx1))
console.log(removeAt(arr2, removeIdx2))

// const expected1 = "b"
// console.log(returnedValue === expected1) // true

// console.log(arr1)
// const arr1Expected = ["a", "c"]

/* ******************************************************************************** */

/*
    Given an array, move the minimum value to the front
    return the array after done
  
    No built in methods
  */

const nums3 = [5, 1, 2, 9];
// const expected1 = [1, 5, 2, 9];
const nums4 = [5, 1, 0, 2, 3, 0];
// const expected2 = [0, 5, 1, 2, 3, 0];


function minToFront(nums) {
  // your code here
  let min = nums[0]
  let minIdx = 0
  for(let i = 1; i < nums.length; i++) {
    if(min > nums[i]) {
      min = nums[i]
      minIdx = i
    }
  }
  if(minIdx > 0) {
    for(let i = minIdx; i > 0; i--) {
      let temp = nums[i]
      nums[i] = nums[i - 1]
      nums[i - 1] = temp
    }
  }
  return nums
}

console.log(minToFront(nums3))
console.log(minToFront(nums4))