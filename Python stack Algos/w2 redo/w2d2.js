/*
  Given a string,
  return a new string with the duplicates excluded

  Bonus: Keep only the last instance of each character.
*/

// const str1 = "abcABC"
// const expected1 = "abcABC"

const str2 = "hellolo";
// const expected2 = "helo"

function stringDedupe(str) {
  // code here
  let map = []
  let newStr = ""
  for(let i = 0; i < str.length; i++) {
    if(!map.includes(str[i])) {
      newStr += str[i]
      map.push(str[i])
    }
  }
  return newStr
}
console.log(stringDedupe(str2))
/*****************************************************************************/
/*
    Given 2 strings, one longer than another
    return boolean if the shorter string is found inside the longer string
  */

// is longStr contains compareStr?

// const strToLookAt = "helloo";
// const strToCheck = "oo";
// const expected3 = true

function includes(compareStr, longStr) {
  // code here
  console.log(longStr.contains(compareStr))
}

includes("helloo","loo")
/*****************************************************************************/
/*
      Given a string containing space separated words
      Reverse each word in the string.
    
      If you need to, use .split to start, then try to do it without.
    */

// const str1 = "hello";
// const expected1 = "olleh";

// const str2 = "hello world";
// const expected2 = "olleh dlrow";

// const str3 = "abc def ghi";
// const expected3 = "cba fed ihg";

function reverseWordsSplit(wordsStr) {
  // code here
}
