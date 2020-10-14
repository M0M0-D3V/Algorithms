/*
  combineStrings
  Given 3 strings, concatenate then return the strings in this order:
  3rd string, 1st string, 2nd string
*/
function combineStrings(str1, str2, str3) {
    return str3 + str1 + str2
}

console.log(combineStrings("helloooo","what's up", "how you doin"))
/*
  distanceDriveable

  Calculate and return total miles that can be driven, what info do you need to answer this?
*/

function distanceDriveable() {
    
}
// function distanceDriveable(mpg, fuelAmt) {
    return mpg * fuelAmt
}

console.log(distanceDriveable(34, 2))





/*
  combineSmallerStringFirst

  Given 2 strings, concatenate them together with the smaller string
  in the front and the longer string in the back and return the result

  If the strings are the same length, concatenate the first string at the beginning.
*/

function combineSmallerStringFirst(str1, str2) {
    if (str1.length == str2.length || str1.length < str2.length) {
        return str1 + str2
    }
    else {
        return str2 + str1
    }
}

console.log(combineSmallerStringFirst("helloworld1", "helloworld2"))

/*
  stringRepeat
  Given a string and an integer (n)
  Return one string that is the given string repeated n times
*/

function stringRepeat(str, integer) {
    let oneStr = "";
    for(let i = 0; i < integer; i++) {
        oneStr += str
    }
    return oneStr
}

console.log(stringRepeat("hello", "4"))

/*

  loopAndMultiply

  Given 3 numbers, n1, n2, n3
  return the sum of n2 times n3 after n1 iterations
*/
function loopAndMultiply(n1, n2, n3) {
    let sum = 0
    for(let i = 0; i < n1; i++) {
        sum += n2 * n3
    }
    return sum
}

console.log(loopAndMultiply(3, 2, 5))
/* ******************************************************************************** */
/* ******************************************************************************** */
/* ******************************************************************************** */

/*
  Balance Index

  Here, a balance point is ON an index, not between indices.

  Return the balance index where sums are equal on either side
  (exclude its own value).

  Return -1 if none exist.

*/

// const nums1 = [-2, 5, 7, 0, 3]
// const expected1 = 2

// const nums2 = [9, 9]
// const expected2 = -1

function balanceIndex(nums) {

}


/* ******************************************************************************** */

/*
  Balance Point

  Write a function that returns whether the given
  array has a balance point BETWEEN indices,
  where one side’s sum is equal to the other’s.
*/

// const nums1 = [1, 2, 3, 4, 10];
// const expected1 = true;
// // Explanation: between indices 3 & 4

// const nums2 = [1, 2, 4, 2, 1];
// const expected2 = false;

function balancePoint(nums) {}