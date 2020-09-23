// Interview Algo given to alumni

/* 
  You are given a list of integers. Find all the consecutive set of 
  integers that adds up to the sum passed in as one of the inputs.
*/
/* 
  input: findConsqSums([2,5,3,6,7,23,12], 16)
  output: [
    [2,5,3,6],
    [3,6,7]
  ]
  bonus, what if there are zeros in the input
  input: findConsqSums([2, 5, 3, 6, 7, 0, 0, 23, 12], 16)
  output: [
    [2, 5, 3, 6],
    [3, 6, 7],
    [3, 6, 7, 0],
    [3, 6, 7, 0, 0]
  ]
*/

function findCosqSums(arr, num) {
  let consqArr = [];
  let consqSum = 0;
  let i = 0;
  let j = 0; //if i = 2
  //while loop through       10   vs 16
  while (i < arr.length) {
    if (consqSum >= num) {
      consqArr.push(arr[i]);
    }
    //add to sum till it = num
    consqSum += arr[i];
    if (consqSum <= num) {
      //true
      consqArr.push(arr[i]); //push into arr
    } else {
      //false
    }
  }
  // if something do something but what
  return consqArr;
}



// levi's answer
let x = [2,5,3,6,7,0,0,23,12];
let y = 16;

function findConsqSums2(arr,num) {
  let newArr= [];
  let tempArr = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = arr[i];
    tempArr = [];
    tempArr.push{sum};
    for(let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if(sum < num) {
        
      }
    }
  }
}

/* 
  BONUS ALGO
  Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
  You can assume there is always a valid solution
  These example inputs are sorted for readability, but the input is not guaranteed to be sorted and the output does not need to be in any specific order
  
  Input: [1, 1, 1, 2, 2, 3], k = 2
  Output: [1, 2]
  Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements
  Input: [0, 0, 0, 2, 2, 3], k = 1
  Output: [0]
  Explanation: k being 1 means return the single most frequent element
  Input: [1, 1, 2, 2, 3, 3], k = 3
  Output: [1, 2, 3]
  Explanation: 3 is the only value that would be passed in for k because it is the only value for k that has
  a valid solution. Since 1, 2, and 3, all occur 3 times, they are all the most frequent ints, so there is no
  1 most frequent int, or 2 most frequent int, but there are 3 most frequent ints.
  HARD Bonus: Make it O(n) time
*/
