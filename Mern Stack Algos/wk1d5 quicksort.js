/* 
  Array: Quick Sort
  Create a function that uses yesterday’s partition to fully sort an array in-place.
  Time Complexity
    - Best: O(n log(n))
    - Average: O(n log(n))
    - Worst: O(n^2)
  
*/

// visualized https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
// src=https://itnext.io/a-sort-of-quick-guide-to-quicksort-and-hoares-partitioning-scheme-in-javascript-7792112c6d1

/* 
  Steps:
    - [] start by partitioning the full array (use the previously built partition algo)
    - [] then partition the left side of the array (left of partition idx) 
    - [] and partition the right side (right of partition idx), recursively
*/
// from yesterday
// const { partitionHoare } = require("../4_Thur/partition");
function partitionHoare(arr, left = 0, right = arr.length - 1) {
  const pivot = arr[Math.floor((left + right) / 2)];
  // console.log("pivot: ", pivot);

  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }

    while (arr[right] > pivot) {
      right--;
    }

    if (left <= right) {
      // swap left and right because we found something left of pivot that is larger
      // and something right of pivot that is small, so they need to swap
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return left;
}
//                       if  >   then we're done!
function quickSort(arr, left = 0, right = arr.length - 1) {
  //edge case if arr has only 2 values
  if (left >= right) {
    return arr;
  }

  //pivot variable call partition function to partition left side and right side
  const pivot = partitionHoare(arr, left, right);

  quickSort(arr, left, pivot); //left ??
  quickSort(arr, pivot, right); //right ??

  // return sorted array
  return arr;
}

let middle = Math.floor(arr.length / 2);
function sort(arr) {
  left = [];
  right = [];
  let pivot = arr.pop();

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return sortedArr.concat(sort(left), pivot, sort(right));
}
//         arrr
//     /         \
//   left        right
//   /\            /\
// left vs pivot right vs pivot

var x = [11, 8, 14, 3, 6, 2, 7];
console.log(x);
console.log(quickSort(x));
