/*
  Given an array, reverse it's items in place
  return the array after reversing it

  Do it in place without using any built in methods
*/

// const arr1 = [1, 2, 3]
// const expected1 = [3, 2, 1]

// const arr2 = ["a", "b"]
// const expected2 = ["b", "a"]

// const arr3 = ["a"]
// const expected3 = ["a"]

// const arr4 = []
// const expected4 = []

function reverseArr(arr) {
  // code here
  // write pseudo code
  // [x] if length is empty, then return arr
  if (arr.length < 2) {
    return arr;
  }
  // [x] make a loop - only go half way because if we go all the way to the end, we will flip the array back to original
  for (var i = 0; i < arr.length / 2; i++) {
    // [x] use a temp variable
    var temp = arr[i];
    // [x] reverse items by swapping items from outside inward
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
    console.log(arr);
  }
  return arr;
}

reverseArr([1, 2, 3, 4, 5, 6]);
/* ******************************************************************************** */

/*
    Recreate the built in .slice method
  
    Given an array, a start index, and an end index,
    return a NEW array that has only the elements from
    the start index (inclusive) to the end index (exclusive)
  
    What should you do if the provided end index is out of bounds?
  */

// const arr1 = ["a", "b", "c", "d", "e"];
// const startIdx1 = 0;
// const endIdx1 = 5;
// const expected1 = ["a", "b", "c", "d", "e"];

// const arr2 = ["a", "b", "c", "d", "e"];
// const startIdx2 = 0;
// const endIdx2 = 1;
// const expected2 = ["a"];

// const arr3 = ["a", "b", "c", "d", "e"];
// const startIdx3 = 1;
// const endIdx3 = 2;
// const expected3 = ["b"];

// const arr4 = ["a", "b", "c", "d", "e"]
// const startIdx4 = -100
// const endIdx4 = 100
// const expected4 = ["a", "b", "c", "d", "e"]

// const arr5 = ["a", "b", "c", "d", "e"];
// const startIdx5 = 0;
// const endIdx5 = 0;
// const expected5 = [];

// const arr6 = ["a", "b", "c", "d", "e"];
// const startIdx6 = 1;
// const endIdx6 = 1;
// const expected6 = [];

function slice(arr, startIdx, endIdx) {
  // code here
  // [x] what if start is less than first index
  if (startIdx < 0) {
    startIdx = 0;
  }
  // [x] what if end is more than end index
  if (endIdx > arr.length) {
    endIdx = arr.length;
  }
  // [x] create new array to push to
  var newArr = [];
  // [x] make a loop, consider start and stop, end is exclusive so it does not include the last index but before it
  for (var i = startIdx; i < endIdx; i++) {
    // [x] push to newArr
    newArr.push(arr[i]);
  }
  // [x] return new array
  return newArr;
}

// slice(arr4, -100, 100)
