// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2140

/* 
  Array: Insertion Sort
*/

/* 
  - visualization with playing cards (scroll down): https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
  - array / bar visualization: https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
  - see other visualizion linked in sorts.md
  - efficient for small data sets
  - constant memory / space O(1)
  Time Complexity
    - Best: O(n) when array is already sorted
    - Average: O(n^2)                                             //nested for loop because of the notation
    - Worst: O(n^2) when the array is reverse sorted
  - this sort splits the array into two portions (conceptually, not literally)
  - the left portion will become sorted, the right portion (that hasn't been iterated over yet) is unsorted
  // can shift or swap target element until it reaches desired position
  // shifting steps:
  1. consider the first item as sorted
  2. move to the next item
  3. store current item in a temp var (to make this position availale to shift items)
  4. if item to the left of current is greater than current item, shift the left item to the right
  5. repeat step 4 as many times as needed
  6. insert current item
  7. move to the next item and repeat
  
  // swap steps:
  1. [x] consider the first item as sorted
  2. [x] move to the next item
  4. [x] if item to left of current item is less than current, swap
  5. [] repeat step 4 until item to left is less than current item //but how though
  6. [] move to next item and repeat
*/

// sample arrs
const arrRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const arrOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function insertionSort(arrList) {
  // for(let i = 1; i < arrList.length; i++) {
  //     console.log("in the outer loop");
  for (let j = 1; j < arrList.length; j++) {
    // console.log("in the inner loop");
    let temp = arrList[j]; //take temp and compare to previous #s to put in proper place
    let leftIdx = j - 1;
    while (leftIdx >= 0 && arrList[leftIdx] > temp) {
      if (arrList[j - 1] > arrList[leftIdx]) {
        arrList[j] = arrList[j - 1];
        arrList[j - 1] = temp;
        leftIdx--;
      }
      console.log(arrList);
    }
  }
}

//loop thru the array

console.log(insertionSort(arrRandom));
// console.log(insertionSort(arrOrdered));
// console.log(insertionSort(arrReversed));
