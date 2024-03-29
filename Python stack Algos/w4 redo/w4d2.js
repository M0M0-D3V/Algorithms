/*
  Recursive Factorial

  5! => 1 x 2 x 3 x 4 x 5

  Input: integer
  Output: integer, product of ints from 1 up to given integer

  If less than zero, treat as zero.
  Bonus: If not integer, truncate (remove decimals).

  Experts tell us 0! is 1.

  rFact(3) = 6 (1*2*3)
  rFact(6.8) = 720 (1*2*3*4*5*6)
*/

// const num1 = 3
// const expected1 = 6
// // Explanation: 1*2*3 = 6

// const num2 = 6.8
// const expected2 = 720
// // Explanation: 1*2*3*4*5*6 = 720

// const num3 = 0
// const expected3 = 1

function factorial(n) {
  // code here
  // n = Math.floor(n)
  if(n == 0 || n < 0) {
    return 1
  }
  else {
    let old = n
    n--
    return old * factorial(n)
  }
}

console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))
/*****************************************************************************/

/*
    Return the fibonacci number at the nth position, recursively.
  
    Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...
  
    The next number is found by adding up the two numbers before it,
    starting with 0 and 1 as the first two numbers of the sequence.
  */

// const num1 = 0;
// const expected1 = 0;

// const num2 = 1;
// const expected2 = 1;

// const num3 = 2;
// const expected3 = 1;

// const num4 = 3;
// const expected4 = 2;

// const num5 = 4;
// const expected5 = 3;

// const num6 = 8;
// const expected6 = 21;

function fibonacci(n) {
  // code here
  if(n == 0) {
    return 0
  }
  if(n == 1 || n == 2) {
    return 1
  }
  // if n is 3
  return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
