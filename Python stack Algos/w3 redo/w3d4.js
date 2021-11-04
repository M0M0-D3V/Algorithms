/*
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/

const us_dollar = {
  quarter: 25,
  dime: 10,
  nickel: 5,
  penny: 1,
}

// const cents1 = 25
// const expected1 = { quarter: 1 }

// const cents2 = 50
// const expected2 = { quarter: 2 }

// const cents3 = 9
// const expected3 = { nickel: 1, penny: 4 }

// const cents4 = 99
// const expected4 = { quarter: 3, dime: 2, penny: 4 }

function fewestCoinChange(cents) {
  // code here
  let answer = {}
  if(cents > us_dollar.quarter) {
    answer['quarter'] = Math.floor(cents / us_dollar.quarter)
    cents = cents % us_dollar.quarter
  }
  if(cents > us_dollar.dime) {
    answer['dime'] = Math.floor(cents / us_dollar.dime)
    cents = cents % us_dollar.dime
  }
  if(cents > us_dollar.nickel) {
    answer['nickel'] = Math.floor(cents / us_dollar.nickel)
    cents = cents % us_dollar.nickel
  }
  if(cents > us_dollar.penny){
    answer['penny'] = cents
  }
  return answer
}

console.log(fewestCoinChange(50))

/* ******************************************************************************** */

/*
  Missing Value

  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
*/

// const nums1 = [3, 0, 1];
// const expected1 = 2;

// const nums2 = [3, 0, 1, 2];
// const expected2 = null;
// Explanation: nothing is missing

/*
  Bonus: now the lowest value can now be any integer (including negatives),
  instead of always being 0.
*/

// const nums3 = [2, -4, 0, -3, -2, 1];
// const expected3 = -1;

// const nums4 = [5, 2, 7, 8, 4, 9, 3];
// const expected4 = 6;

function missingValue(nums) {
  // code here
  nums.sort()
  console.log(nums)
  for(let i = 1; i < nums.length; i++) {
    if(nums[i - 1] + 1 != nums[i]) {
      return nums[i - 1] + 1
    }
  }
}
console.log(missingValue([2, -4, 0, -3, -2, 1]))
