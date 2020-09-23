/* 
  http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2140
  Array: Bubble Sort
  Time Complexity
    - Best: n when array is already sorted
    - Average: O(n^2)
    - Worst: O(n^2) when the array is reverse sorted
  For review, create a function that uses BubbleSort to sort an unsorted array in-place.
  For every pair of adjacent indicies, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/


/* 
  http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2140
  
  Selection sort works by iterating through the list, finding the minimum value, and moving it to the beginning of the list. Then, ignoring the first position, which is now sorted, iterate through the list again to find the next minimum value and move it to index 1. This continues until all values are sorted.
  Time Complexity
    - Best: O(n^2)
    - Average: O(n^2)
    - Worst: O(n^2)
  Selection sort is one of the slower sorts.
  - ideal for: pagination, where page 1 displays 10 records for example, you run selection sort for 10 iterations only to display the first 10 sorted items
*/