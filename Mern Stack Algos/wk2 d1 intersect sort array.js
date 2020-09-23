/* 
  Intersect Sorted Arrays (dedupe)
  Efficiently combine two already sorted multiset arrays        //we could concat or newarr
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  
  Input: [1,2,2,2,7], [2,2,6,6,7]
  Output: [2,7]
*/

let arr1 = [1, 2, 2, 2, 7]; // what if arr1  = [1 , 7]
let arr2 = [2, 2, 6, 6, 7];
function intersetSortedArr(arr1, arr2) {
  //  tada
  let newarr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      // this is situation for if the # is less than but already in the newarr
      // var fruits = ["Banana", "Orange", "Apple", "Mango"];
      // var n = fruits.includes("Mango");
      if (arr1[i] < arr2[j] && newarr.includes(arr[i])) {
      }
    }
  }
}
// save arr1 length
// arr1lastpos = arr1.length-1
// concat
// arr1.concat(arr2)
// filter???
// if arr1[i] < arr2[j]??

// henry's & patrick's
function Dedupe(arr1, arr2) {
  var result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr[i] == arr2[j]) {
        result.push(arr1[i]);
      }
    }
  }
  console.log(result);
  var newresult = [];
  for (let k = 0; k < result.length; k++) {
    if (result[k] != result[k + 1]) {
      newresult.push(result[k]);
    }
  }
  return newresult;
}

// Neil's single loop
// loop through both arrays together, stopping based on shorter array
// compare valueat idxA to vaue at idxB
// if values are the same, push into new array if new array doesn't contain it
// else, whichever value is smaller, skip it (increment that index only)
function intersectSortedArraysDedupe(arr1, arr2) {
    let idx1 = 0, idx2 = 0;

    const len1 = arr1.length, len2 = arr2.length, result = [];

    while (idx < len1 && idx2 < len2) {
        if (arr1[idx1] < arr2[idx2]) {
            idx1++;

        }else if (arr1[idx1] > arr2[idx2]) {
            idx2++;
        }
        else {
            if(result[result.length-10 !== arr1[idx1]) {
                result.push(arr1[idx1]);
            }
            idx1++;
            idx2++;
        }
    }
}