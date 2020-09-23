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
  //create a new array that will hold all the different chunks
  let chunked = [];

  //iterate through original array of elements
  for (let element of array) {
    //to get the last item in the array
    const last = chunked[chunked.length - 1];

    //say if last does not exist or if the length of last is equal to our chunk..
    //..push in a new chunk and we'll immediately put our element that we are currently iterating over.
    if (!last || last.length === size) {
      chunked.push([element]);
      //in case we have a chunk that does not get full.
    } else {
      last.push(element);
    }
  }
  //return the chunked array
  return chunked;
}

module.exports = chunk;
