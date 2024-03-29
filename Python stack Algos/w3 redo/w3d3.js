/*
  Array: Remove Duplicates

  Given a SORTED array of integers, dedupe the array
  Because array elements are already in order, all duplicate values will be grouped together.

  Ok to use a new array

  Bonus: do it in O(n) time (no nested loops, new array ok)
  Bonus: Do it in-place (no new array)
  Bonus: Do it in-place in O(n) time and no new array
  Bonus: Keep it O(n) time even if it is not sorted
*/

// const nums1 = [1, 1, 1, 1]
// const expected1 = [1]

// const nums2 = [1, 1, 2, 2, 3, 3]
// const expected2 = [1, 2, 3]

// const nums3 = [1, 1, 2, 3, 3, 4]
// const expected3 = [1, 2, 3, 4]

function removeDuplicates(nums) {
  // first bonus, O(n) w/new array
  let newArr = [nums[0]]
  for(let i = 1; i < nums.length; i++) {
    if(nums[i - 1] != nums[i]) {
      newArr.push(nums[i])
    }
  }
  return newArr
}

console.log(removeDuplicates([1, 1, 1, 1, 2, 2, 3, 3, 3, 4]))

function removeDuplicates2(nums) {
  // in place, no new array
}

/*****************************************************************************/

/*
  Array: Mode

  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.

  What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
      - return empty array
*/

// const nums1 = [];
// const expected1 = [];

// const nums2 = [1];
// const expected2 = [1];

// const nums3 = [5, 1, 4];
// const expected3 = [];

// const nums4 = [5, 1, 4, 1];
// const expected4 = [1];

// const nums5 = [5, 1, 4, 1, 5];
// const expected5 = [5, 1];
//  - order doesn't matter

// const nums6 = [5, 1, 4, 1, 5, 4];
// const expected6 = [];

function mode(nums) {
  if(nums.length < 1) {
    return []
  }
  let count = {}
  let max
  let allSame = true
  let ans = []
  for(let i = 0; i < nums.length; i++) {
    if(count[nums[i]]) {
      count[nums[i]]++
      max = count[nums[i]]
    }
    else{
      count[nums[i]] = 1
    }
  }
  for(let num in count) {
    if(count[num] != max) {
      allSame = false
    }
    else {
      ans.push(parseInt(num))
    }
  }
  if(allSame) {
    return []
  }
  return ans
}

console.log(mode([5, 1, 4, 1]))
console.log(mode([5, 1, 4, 1, 5]))
console.log(mode([5, 1, 4, 1, 5, 4]))
console.log(mode([5, 1, 4, 1, 5, 4, 1, 1, 2, 2, 2, 2]))
