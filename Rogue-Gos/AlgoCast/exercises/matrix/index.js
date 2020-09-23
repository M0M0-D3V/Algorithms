// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
function matrix(n) {
  let newArr = matrixMaker(n);
  // let gridArr = regularGrid(newArr);
  const len = n;
  const max = n * n;
  let start = 1;
  let currentRow = 0;

  while (start <= max) {
    // go right
    for (let j = currentRow; j < len - currentRow; j++) {
      newArr[currentRow][j] = start++;
      if (start > max) {
        start--;
      }
    }

    // go down
    for (let i = currentRow + 1; i < len - (currentRow + 1); i++) {
      newArr[i][len - (currentRow + 1)] = start++;
    }

    // go left
    for (let j = len - (currentRow + 1); j >= currentRow; j--) {
      newArr[len - (currentRow + 1)][j] = start++;
    }

    // go up
    for (let i = len - (currentRow + 2); i > currentRow; i--) {
      newArr[i][currentRow] = start++;
    }

    currentRow++;
  }
  return newArr;
}

function matrixMaker(n) {
  let newArr = [];
  for (let i = 0; i < n; i++) {
    newArr.push([]);
  }
  return newArr;
}

function regularGrid(arr) {
  const len = arr.length;
  const max = len * len;
  let start = 1;
  // fill the grid with just ints going ++ from left to right
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (start <= max) {
        arr[i][j] = start++;
      }
    }
  }
  return arr;
}

console.log(matrix(20));
module.exports = matrix;
