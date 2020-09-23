function spiral(n) {
  var matrix = new Array(n);
  for (var i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(n);
  }

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      matrix[i][j] = 0;
    }
  }

  var startNum = 0;
  var rowNum = 0;

  function spin(rowNum) {
    // right
    for (var j = rowNum; j < n - rowNum; j++) {
      startNum++;
      matrix[rowNum][j] = startNum;
    }

    if (startNum === n * n) {
      return;
    }

    // down
    for (var i = rowNum + 1; i < n - (rowNum + 1); i++) {
      startNum++;
      matrix[i][n - (rowNum + 1)] = startNum;
    }

    if (startNum === n * n) {
      return;
    }

    // left
    for (var j = n - (1 + rowNum); j >= rowNum; j--) {
      startNum++;
      matrix[n - (1 + rowNum)][j] = startNum;
    }

    if (startNum === n * n) {
      return;
    }

    //top
    for (var i = n - (2 + rowNum); i > rowNum; i--) {
      startNum++;
      matrix[i][rowNum] = startNum;
    }

    if (startNum === n * n) {
      return;
    }

    spin(rowNum + 1);
  }

  spin(rowNum);
  console.log(matrix);
}

spiral(4);
