// This weeks theme: Arrays

/*
  Given an array, remove and
  return the value at the beginning of the array and then shift the remaining items down to fill the empty space.

  Do this without using any built-in array methods except pop().
*/

const arr1 = [1, 2, 3]
// const expected1 = 1
// // after running function arr1 should now be:
// const arr1Expected = [2, 3]

const arr2 = ["a", "b", "c", "d"]
// const expected2 = "a"
// // after running function arr2 should now be:
// const arr2Expected = ["b", "c", "d"]

function shift(arr) {
    // code here
    let first = arr[0]
    for(let i = 1; i < arr.length; i++) {
      arr[i-1] = arr[i]
    }
    arr.length--
    return first
  }

  console.log(shift(arr1))
  console.log(shift(arr2))
  
  /* ******************************************************************************** */
  
  /*
    Given array and an additional value, insert this value at the beginning of the array by making space for it at the beginning of the array.
    return the new length of the array.
  
    Do this without using any built-in array methods.
  */
  
  const arr3 = [1, 2, 3]
  const newItem1 = 0
  // const expected1 = 4
  // // after function is called, arr1 should be:
  // const arr1Expected = [0, 1, 2, 3]
  
  const arr4 = []
  const newItem2 = "a"
  // const expected2 = 1
  // // after function is called, arr2 should be:
  // const arr2Expected = ["a"]
  
  function unshift(arr, newItem) {
    // code here
    arr.length++
    for(let i = arr.length - 1; i > 0; i--) {
      arr[i] = arr[i-1]
    }
    arr[0] = newItem
    return arr.length
  }
  console.log(unshift(arr3, newItem1))
  console.log(unshift(arr4, newItem2))
  