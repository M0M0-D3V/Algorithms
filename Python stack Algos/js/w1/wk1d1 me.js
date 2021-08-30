/* 
  Acronyms

  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 

  Do it with .split first if you need to, then try to do it without
*/

const str1 = " there's no free lunch - gotta pay yer way. ";
const expected1 = "TNFL-GPYW";

const str2 = "Live from New York, it's Saturday Night!";
const expected2 = "LFNYISN";

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string to be turned into an acronym.
 * @returns {string} The given str converted into an acronym.
 */
function acronymize(str) {
  let newStr = ""
  if(str[0] != " ") {
    newStr += str[0]
  }
  for(let i = 1; i < str.length - 1; i++) {
    if(str[i] == " ") {
      newStr += str[i + 1]
    }
  }
  return newStr.toUpperCase()
}

console.log(acronymize(str1))
console.log(acronymize(str2))

module.exports = { acronymize };

/*****************************************************************************/

/**
 * - Time: O(n + m) linear -> O(n) where n is wordsStr.length and
 *    m is wordsArr.length.
 * - Space: O(n) linear.
 */
function acronymizeWithSplit(wordsStr) {
  
}

/**
 * - Time: O(n) linear because the nested loops increment i, so every iteration
 *    of nested loops reduces iterations of outer loop.
 * - Space: O(n) linear.
 */
// function acronymize(wordsStr) {
  
// }


/* 
  String: Reverse

  Given a string,
  return a new string that is the given string reversed
*/

const str11 = "creature";
const expected11 = "erutaerc";

const str22 = "dog";
const expected22 = "god";

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 */
// function reverseString(str) {

// }

module.exports = { reverseString };

/*****************************************************************************/

/**
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 */
function reverseString(str) {
  let revStr = ""
  len = str.length - 1
  for(let i = len; i >= 0; i--) {
    revStr += str[i]
  }
  return revStr
}

console.log(reverseString(str11))
console.log(reverseString(str22))

