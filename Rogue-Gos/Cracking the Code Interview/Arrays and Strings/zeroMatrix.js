// write an algorithm such that if an element in an M x N matrix is 0, its entire row and column are set to 0

function zeroMatrix(matrix) {
  if (matrix.length < 1) return false;
  let position = 0;
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].includes(0)) {
      position = matrix[i].indexOf(0);
    }
  }
}
