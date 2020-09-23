/* 
  Given a string, find the length of the longest substring without repeating characters.
*/

const test1 = "abcabcbb";
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

const test2 = "bbbbb";
// Output: 1
// Explanation: The answer is "b", with the length of 1.

const test3 = "pwwkew";
// Output: 3
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const test4 = "dvadf";
// Output: 4
// Explanation: "vadf"
/* 
  Given a string, find the length of the longest substring without repeating characters.
*/

const test1 = "abcabcbb";
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

const test2 = "bbbbb";
// Output: 1
// Explanation: The answer is "b", with the length of 1.

const test3 = "pwwkew";
// Output: 3
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const test4 = "dvadf";
// Output: 4
// Explanation: "vadf"

function findSubstring(string) {
  let len = 0;

  for (let i = 1; i < string.length; i++) {
    if (string.length == 0) {
      return null;
    }
    if (string[i] === string[i - 1]) {
      return len;
    }
    //if current position is not equal to the previous position
    else if (string[i] !== string[i - 1]) {
      len++;
    }
    // string.substring().length??;
    //output = length of the longest substring
    // pitfall - when in abcabc, when loop goes to second 'a', the len
  }
  return len;
}

console.log(findSubstring(test1));

("abcabcbb");
("pwwkew");
let tempSubString = {};
let ctrLen = 0;
for (const i of string) {
  if (tempSubString.hasOwnProperty(i)) {
    tempSubString = {};
    tempSubString[i] = i;
  } else {
    tempSubString[i] = i;
    ctrLen = Object.keys(tempSubString).length;
  }
}
