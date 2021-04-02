// This weeks theme: Arrays

/*
  Given an array, remove and
  return the value at the beginning of the array and then shift the remaining items down to fill the empty space.

  Do this without using any built-in array methods except pop().
*/

// const arr1 = [1, 2, 3]
// const expected1 = 1
// // after running function arr1 should now be:
// const arr1Expected = [2, 3]

// const arr2 = ["a", "b", "c", "d"]
// const expected2 = "a"
// // after running function arr2 should now be:
// const arr2Expected = ["b", "c", "d"]

function shift(arr) {
    // code here
    // save value at beginning of array to a variable
    // move values left in array by replacing items with the next one
    if(arr.length < 2) {
      return null
    }
    var save = arr[0]
    for(var i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1]
    }
    arr.length -= 1
    console.log(arr)
    return save
  }

  // run these
  // var run1 = shift(arr1)
  // console.log(run1)
  
  /* ******************************************************************************** */
  
  /*
    Given array and an additional value, insert this value at the beginning of the array by making space for it at the beginning of the array.
    return the new length of the array.
  
    Do this without using any built-in array methods.
  */
  
  // const arr1 = [1, 2, 3]
  // const newItem1 = 0
  // const expected1 = 4
  // // after function is called, arr1 should be:
  // const arr1Expected = [0, 1, 2, 3]
  
  // const arr2 = []
  // const newItem2 = "a"
  // const expected2 = 1
  // // after function is called, arr2 should be:
  // const arr2Expected = ["a"]
  
  function unshift(arr, newItem) {
    // code here
    // test to see if array is empty
    // loop from the end of array to 0
    // move value in index to the right
    // replace 0 index with newItem
    // return new length
    if(arr.length < 1) {
      arr[0] = newItem
      return arr.length
    }
    for(var i = arr.length; i > 0; i--) {
      arr[i] = arr[i - 1]
      console.log(arr)
    }
    arr[0] = newItem
    console.log(arr)
    return arr.length
  }
  // run these
  // var run1 = unshift(arr1, newItem1)
  // console.log(run1)