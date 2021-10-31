// Theme: Arrays

/*
  Balance Index

  Here, a balance point is ON an index, not between indices.

  Return the balance index where sums are equal on either side
  (exclude its own value).

  Return -1 if none exist.

*/

// const nums1 = [-2, 5, 7, 0, 3];
// const expected1 = 2;

// const nums2 = [9, 9];
// const expected2 = -1;

function balanceIndex(nums) {
  // code here
  if(nums.length < 3) {
    return -1
  }
  let arrLeft = [nums[0]]
  let arrRight = [...nums]
  arrRight.shift()
  arrRight.shift()
  for(let i = 1; i < nums.length - 1; i++) {
    console.log(`arrLeft: ${arrLeft}, arrRight: ${arrRight}`)
    if(getSum(arrLeft) == getSum(arrRight)) {
      return i
    }
    arrLeft.push(nums[i])
    arrRight.shift()
    console.log(arrRight)
  }
  return -1
}

function getSum(arr) {
  let sum = 0
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}

console.log(balanceIndex([-2, 5, 7, 0, 3]))
/*****************************************************************************/

/*
      Balance Point
    
      Write a function that returns whether the given
      array has a balance point BETWEEN indices,
      where one side’s sum is equal to the other’s.
    */

// const nums1 = [1, 2, 3, 4, 10];
// const expected1 = true;
// Explanation: between indices 3 & 4

// const nums2 = [1, 2, 4, 2, 1];
// const expected2 = false;

function balancePoint(nums) {
  // code here
  if(nums.length < 2) {
    return false
  }
  let arrLeft = [nums[0]]
  let arrRight = [...nums]
  arrRight.shift()
  for(let i = 1; i < nums.length; i++) {
    console.log(`arrLeft: ${arrLeft}, arrRight: ${arrRight}`)
    if(getSum(arrLeft) == getSum(arrRight)) {
      return true
    }
    arrLeft.push(arrRight.shift())
  }
  return false
}

console.log(balancePoint([1, 2, 3, 4, 10]))
