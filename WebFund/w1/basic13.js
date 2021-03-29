var members = ["name", "name"];
// Create a function for each

// 1. Print 1-255
// Print all the integers from 1 to 255.
function print1To255() {
  //   for (let i = 0; i <= 255; i++) {
  for (let i = 0; i < 256; ++i) {
    console.log(`i is: ${i}`);
  }
}
// print1To255();

// 2. Print Odds 1-255
// Print all odd integers from 1 to 255.
function printOdds1To255() {
  for (let i = 1; i < 256; i += 2) {
    console.log(`i is: ${i}`);
  }
}
// printOdds1To255();

// 3. Print Ints and Sum 0-255
// Print integers from 0 to 255, and with each integer print the sum so far.
function printIntsAndSum0To255() {
  let sum = 0;
  for (let i = 0; i < 256; i++) {
    sum += i;
    console.log(`number is: ${i} and sum so far is: ${sum}`);
  }
}
// printIntsAndSum0To255();

// 4. Iterate and Print Array
// Iterate through a given array, printing each value.
function printArrayVals(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
// printArrayVals([3, 57, 6, 77, 24, 34]);

// 5. Find and Print Max
// Given an array, find and print its largest element.
function printMaxOfArray(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }
  console.log(`largest is: ${largest}`);
}
// printMaxOfArray([3, 57, 6, 77, 24, 34]);

// 6. Get and Print Average
// Analyze an array’s values and print the average.
function printAverageOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(`average is: `, sum / arr.length);
}
// printAverageOfArray([3, 57, 6, 77, 24, 34]);

// 7. Array with Odds
// Create an array with all the odd integers between 1 and 255 (inclusive).
function returnOddsArray1To255() {
  let arr = [];
  for (let i = 0; i < 256; i++) {
    if (i % 2 != 0) {
      arr.push(i);
    }
  }
  console.log(arr);
  return arr;
}
// returnOddsArray1To255();

// 8. Square the Values
// Square each value in a given array, returning that same array with changed values.
function squareArrayVals(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= arr[i];
  }
  console.log(arr);
  return arr;
}
// squareArrayVals([2, 4, 6, 9, 3, 5]);

// 9. Greater than Y
// Given an array and a value Y, count and print the number of array values greater than Y.
function returnArrayCountGreaterThanY(arr, y) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > y) {
      count++;
    }
  }
  console.log(`there are ${count} numbers greater than y(${y})`);
  return count;
}
// returnArrayCountGreaterThanY([2, 4, 6, 9, 3, 5], 3);

// 10. Zero Out Negative Numbers
// Return the given array, after setting any negative values to zero.
function zeroOutArrayNegativeVals(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  console.log(arr);
  return arr;
}
// zeroOutArrayNegativeVals([-64, 34, 1, -10, 2, 93, -600]);

// 11. Max, Min, Average
// Given an array, print the max, min and average values for that array.
function printMaxMinAverageArrayVals(arr) {
  let max = arr[0];
  let min = arr[0];
  //   let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum += arr[i];
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  console.log(`max is: ${max}, min is: ${min}`);
  //   can also call the other function to print the average from array we jsut built so w avoid repeating code
  printAverageOfArray(arr);
}
// printMaxMinAverageArrayVals([3, 57, 6, 77, 24, 34]);

// 12. Shift Array Values
// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.
function shiftArrayValsLeft(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = 0;
  console.log(arr);
}
// shiftArrayValsLeft([1, 2, 3, 4, 5]);

// 13. Swap String For Array Negative Values
// Given an array of numbers, replace any negative values with the string 'Dojo'.
function swapStringForArrayNegativeVals(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = "Dojo";
    }
  }
  console.log(arr);
  return arr;
}
// swapStringForArrayNegativeVals([-64, 34, 1, -10, 2, 93, -600]);
