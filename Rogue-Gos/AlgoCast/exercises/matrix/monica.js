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
      console.log(`j is ${j}`);
      console.log(`start is at ${start}`);
      newArr[currentRow][j] = start++;
      console.log(newArr[currentRow][j]);
      console.log(`start is now at ${start}`);
      console.log(`console log line 18 newArr: ${newArr}`);
      // for some reason if I don't do the following if statement, start is +2 instead of +1 for last value.
      // WHYYY
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
  console.log(`logging newArr at line 38: ${newArr}`);
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

console.log(matrix(5));
