/*
  Recreate the .push method without using .push
  Given an array and a new item, add the new item to the back of the array
  return the new length of the array
  hint: What index are you adding a new item at?
  let array1 = [];
console.log(array1);
array1[0] = 2;
console.log(array1);
array1[5] = 4;
console.log(array1);
console.log(array1[2]);
*/
const arr1 = ["a", "b", "c"];
const newItem1 = "d";
// const expected1 = 4
// const expectedArr1 = ["a", "b", "c", "d"]

// const arr2 = []
// const newItem2 = "a"
// const expected2 = 1
// const expectedArr2 = ["a"]

function push(arr, newItem) {
  // code here
  arr[arr.length] = newItem
  return arr
}
console.log(push(arr1, newItem1))

/* ******************************************************************************** */

/*
    Given an array and an int which represents the position starting from the back,
    return the nth-to-last element
  */
// const arr1 = ["a", "b", "c", "d"];
// const idx1 = 1;
// const expected1 = "d";

const arr2 = ["a", "b", "c", "d"]
const idx2 = 2
// const expected2 = "c"

// const arr3 = ["a", "b", "c", "d"]
// const idx3 = 0
// const expected3 = null

// const arr4 = ["a", "b", "c", "d"]
// const idx4 = -1
// const expected4 = null

function nthLast(arr, nthToLast) {
  // code here
  return arr[arr.length-nthToLast]
}

console.log(nthLast(arr2, idx2))
