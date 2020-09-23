// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // slice array into subarray
  //  or push into array.. nested loop
  let len = array.length;
  let rows = Math.ceil(len / size);
  let idx = 0;
  let newchunk = [];
  let chgsize = size;
  for (let i = 0; i < rows; i++) {
    newchunk.push(array.slice(idx, chgsize));
    idx += size;
    chgsize += size;
  }
  return newchunk;
}

chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);

module.exports = chunk;
