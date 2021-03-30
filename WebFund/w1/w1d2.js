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
  //   do we need any data types? no, we can use the existing arr. we want to best follow the requirements. creating a new array will use up more memory for example
  arr[arr.length] = newItem;
  console.log(arr);
  return arr.length;
}

// excute the function with arguments
const newLength = push(arr1, newItem1);
console.log(newLength);

/* ******************************************************************************** */

/*
    Given an array and an int which represents the position starting from the back,
    return the nth-to-last element
  */
//             0    1   2    3       length of 4
const arr1 = ["a", "b", "c", "d"];
// const idx1 = 1;
// const expected1 = "d";

// const arr2 = ["a", "b", "c", "d"]
// const idx2 = 2
// const expected2 = "c"

// const arr3 = ["a", "b", "c", "d"]
// const idx3 = 0
// const expected3 = null

// const arr4 = ["a", "b", "c", "d"]
// const idx4 = -1
// const expected4 = null

function nthLast(arr, nthToLast) {
  // code here
  //   we are returning the value that lives inside the index that is nth from last place
  // whatever is in trhe square bracket references to the index# position within the array. Even if there is math involved, the answer is what is going to be the reference.
  //              4    - 1   =   3
  return arr[arr.length - nthToLast]; // return arr[3]
}

console.log(nthLast(arr1, 1));

/* ******************************************************************************** */

// After finishing, start on the Basic13.
