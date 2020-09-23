/* 
  Union Sorted Arrays
  Efficiently combine two already-sorted multiset arrays
  into a new sorted array containing the multiset union.
  Unions by default will take the set of dupes
  that has the highest occurences from one array.
  Input: [1,2,2,2,7], [2,2,6,6,7]
  Output: [1,2,2,2,6,6,7]
  Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
    because it occurs 3 times at most in ONE set
*/

function unionSortedArrs(arr1, arr2) {
  const res = [];
  let idx1 = 0,
    idx2 = 0;

  while (idx1 < arr1.length || idx2 < arr2.length) {
    if (id1x1 === arr1.length) {
      // arr2 is longer, push in all remaining arr2 nums
,      res.push(arr2[idx2++]);
      continue;
    } else if (idx2 === arr2.length) {
      // arr1 is longer, push in remaining arr1 nums
      res.push(arr1[idx1++]);
      continue;
    }

    if (arr1[idx1] === arr2[idx2]) {
      res.push(arr1[idx1++]);
      idx2++; // since both were same, increment both
    } else if (arr1[idx1] < arr2[idx2]) {
      res.push(arr1[idx1++]);
    } else {
      res.push(arr2[idx2++]);
    }
  }
  return res;
}

function unionSortedArrays(arr1, arr2) {
  let idx1 = 0,
    idx2 = 0;
  const ret = [],
    len1 = arr1.length,
    len2 = arr2.length;

  while (idx1 < len1 && idx2 < len2) {
    const n1 = arr1[idx1],
      n2 = arr2[idx2];

    if (n1 === n2) {
      ret.push(n1);
      idx1++;
      idx2++;
    } else if (n1 < n2) {
      ret.push(n1);
      idx1++;
    } else {
      ret.push(n2);
      idx2++;
    }
  }

  // arrays might be different lengths, if any elems are remaining, concat them
  return ret.concat(arr1.slice(idx1)).concat(arr2.slice(idx2));
}

// Kevin's solution array
function unionSortedyArray(arr1, arr2) {
    let newArr = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            newArr.push(arr1[i]);
            i++;

        }
        else if (arr1[i] > arr2[j]) {
            newArr.push[arr[j];
        j++;]
        }
    else {
            newArr.push(ar11[i]);
            i++;
            j++;
        }
    }
    while (i < arr1.length) {
        newArr.push(arr1[i]);
        i++;

    }
    while (j < arr2.length) {
        newArr.push(arr2[j]);
        j++;
    }

    return newArr;
}


/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
  Input:
  [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
  ]   
  Output: 2
  left to right diagonal: 1 + 5 + 9 = 15
  right to left diagonal: 3 + 5 + 9 = 17
  absolute difference = 2
*/

function diagonalDifference(matrix) {
  let ltrSum = 0,
    rtlSum = 0;

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    ltrSum += row[i];
    rtlSum += row[row.length - i - 1];
  }
  return Math.abs(ltrSum - rtlSum);
}

function diagonalDifference2(matrix) {
  let diff = 0;

  matrix.forEach((row, i) => (diff += row[i] - row[row.length - i - 1]));
  return Math.abs(diff);
}


// Jimmy's solution
functional diagonalDifference3(matrix) {
    let length = matrix.length;
    let diagonalSum1 = 0;
    let diagonalSum2 = 0;
    let results = 0;

    for (let index = 0; index < length; index++) {
        diagonalSum1 += matrix[i][i];
        diagonalSum2 += matrix[length-1-i]i];
        if(diagonalSum1 >= diagonalSum2) {
            results = diagonalSum1 - diagonalSum2;

        } else {
            results = diagonalSum2 - diagonalSum1
        }
    }
}