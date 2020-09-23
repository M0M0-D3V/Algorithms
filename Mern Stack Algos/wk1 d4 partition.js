// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2140
/* 
  Array: Partition
  
  Assume you have access to a swap function or practice using array destructure notation to swap
  Params: arr, left, right
    - for now, left will be 0, and right will be the last idx
    - later these params will be used to specify a sub section of the array to partition
  Steps:
  1. Pick an item out of the arr to be your pivot value
    - usually the middle item or the last item
  2. Partition the array IN PLACE such that all values less than the pivot are to the left of it
  and all values greater than the pivot are to the right (not perfectly sorted)
  3. return: new idx of the pivot value
*/
// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2140
/* 
  Array: Partition
  
  Assume you have access to a swap function or practice using array destructure notation to swap
  Params: arr, left, right
    - for now, left will be 0, and right will be the last idx
    - later these params will be used to specify a sub section of the array to partition
  Steps:
  1. Pick an item out of the arr to be your pivot value
    - usually the middle item or the last item
  2. Partition the array IN PLACE such that all values less than the pivot are to the left of it
  and all values greater than the pivot are to the right (not perfectly sorted)
  3. return: new idx of the pivot value
*/

//[4,7,8,5,2,1,0,9,6]  //9    [4,7, 8]
/*  mid = 5 
        /   \ 
  [4,2...]   [7,8... ]      




*/

function partition(arr, leftIdx = 0, rightIdx = arr.length - 1) {
  let middle = Math.floor(arr.length / 2);
  let leftArr = [];
  let rightArr = [];
  // const left = arr.slice(0, middle);
  // const right = arr.slice(middle);

  //4,7,8.              2,1,0,9,6   =>>>>  0,1,4,2, 5 ,7,8,9,6
  //5    <    //9
  //   while(middle < arr.length){      //how to compare 5 to 4, 7, 8 ????
  while (leftIdx < arr.length) {
    if (arr[leftIdx] < middle) {
      leftArr.push(arr[leftIdx++]);
    } else {
      rightArr.push(arr[leftIdx++]);
    }
    // leftIdx++;
  }
  let newPosIdx = leftArr.length;
  leftArr.push(middle).concat(rightArr);
  arr.slice(0, middle);
  // new idx = leftArr.push(middle).concat(rightArr); []
}

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
