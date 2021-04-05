/*
  Array: Concat

  .push allowed: arrName.push(newItem)

  Replicate JavaScript’s concat() which combines two arrays into one NEW array

  Input: two arrays
  Output: one NEW array with the items of both in the original order
*/

// const arrA1 = ["a", "b"]
// const arrB1 = [1, 2, 3]
// const expected1 = ["a", "b", 1, 2, 3]

// const arrA2 = [1, 2, 3]
// const arrB2 = ["a", "b"]
// const expected2 = [1, 2, 3, "a", "b"]

function concat(arr1, arr2) {
  // your code here
  // [] create new arr[]
  var newArr = [];
  // push into newArr each index of arrA1 and arrB1
  for (var i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]);
  }
  // separate loop for arrB1
  for (var i = 0; i < arr2.length; i++) {
    newArr.push(arr2[i]);
  }
  console.log(newArr);
  return newArr;
}

// const arrA1 = ["a", "b"]
// const arrB1 = [1, 2, 3]
// concat(arrA1, arrB1)

/* ******************************************************************************** */

/*
    From zoom interview with student in year 2020
  
    Given one array,
    return a new array that contains all of the original items duplicated twice
  */

// const arr1 = ["a", "b", "c"];
// const expected1 = ["a", "b", "c", "a", "b", "c"];

// const arr2 = ["a"];
// const expected2 = ["a", "a"];

// const arr3 = [];
// const expected3 = [];

function concatArrWithSelf(arr) {
  // your code here
  // create new array
  var newArr = [];

  // loop this twice
  for (var i = 0; i < 2; i++) {
    // loop through arr and push each index to the new Arr
    for (var j = 0; j < arr.length; i++) {
      newArr.push[j];
    }
  }
  return newArr;
}
const arrA3 = ["a", "b"];
console.log(concatArrWithSelf(arrA3));

// OR
function concatArrWithSelf2(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
const arrA3 = ["a", "b"];
console.log(concatArrWithSelf2(arrA3));
