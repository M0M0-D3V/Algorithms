// https://leetcode.com/problems/two-sum/

/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
 */

/* 
  Given nums = [2, 7, 11, 15], target = 9,
  Because nums[0] + nums[1] = 2 + 7 = 9,
  return [0, 1].
  Easier version:
    return an array of the two numbers that add up to the target num
*/

function twoSum(arr, target) {
  let ans = [];
  if (arr.length < 2) {
    return "Ain't gonna happen today";
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        ans.push(i, j);
        return ans;
      }
    }
  }
}

console.log(twoSum([4, 2, 9, 7, 15], 9));

// loop though and compare arr[i] + arr[j] to see if they add up to target
// if so, then these are the two numbers and indexes.  So, put them into a new array
// nested for loops or while loops

// https://www.codewars.com/kata/58f8b35fda19c0c79400020f

/* 
  Given an array of ints, find all the non-consecutive integers
  A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
  The first element is never considered non-consecutive.
  Return an array of objects where each object contains the number itself
  and it's index.
  Input: [1,2,3,4,6,7,8,10]
    - 6 and 10 are the only non-consecutive numbers
  Output: [
    {i: 4, n:6},
    {i: 7, n:10}
  ]
*/
function nonConsecutive(arr) {
  let ans = [];
  let n = 0;
  for (let i = 1; i < arr.length; i++) {
    console.log(arr[i], arr[i - 1]);
    if (arr[i] != arr[i - 1] + 1) {
      ans.push({ i: i, n: arr[i] });
      console.log("hi");
      console.log(`hello! ${i} and maybe ans ${arr[i]}`);
    }
  }
  return ans;
}
console.log(nonConsecutive([1, 2, 3, 4, 6, 7, 8, 10]));

// HEY IT WORKS NOW!!
// return was in the wrong bracket
// good find!!  <(^-^)>  yasssss lol
// thanks
// we kick ass
// ^^ looks like Kirby
// haha they gone see our chat

// Monica's codewars for just finding the first one
// function firstNonConsecutive (arr) {
//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] != arr[i - 1] + 1) {
//           return arr[i];
//         }
//       }
//       return null;
//     }
