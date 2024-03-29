/*
  String: Rotate String

  Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the right by that given integer amount.
*/

// const str1 = "Hello World"
// const rotateAmnt1 = 0
// const expected1 = "Hello World"

// const rotateAmnt2 = 1
// const expected2 = "dHello Worl"

// const rotateAmnt3 = 2
// const expected3 = "ldHello Wor"

// const rotateAmnt4 = 4
// const expected4 = "orldHello W"

// const rotateAmnt4 = 26
// const expected4 = "orldHello W"

function rotateStr(str, n) {
  // code here
  if (n == 0) {
    return str;
  } else if (n > str.length) {
    n = n % str.length;
  }
  let temp = "";
  for (let i = str.length - n; i < str.length; i++) {
    temp += str[i];
  }
  for (let i = 0; i < str.length - n; i++) {
    temp += str[i];
  }
  str = temp;
  return str;
}

console.log(rotateStr("Hello World", 0));
console.log(rotateStr("Hello World", 1));
console.log(rotateStr("Hello World", 2));
console.log(rotateStr("Hello World", 3));
console.log(rotateStr("Hello World", 4));
console.log(rotateStr("Hello World", 26));

/*****************************************************************************/

/*
      Create the function isRotation(str1,str2) that
      returns whether the second string is a rotation of the first.
    */

// const strA1 = "ABCD";
// const strB1 = "CDAB";
// const expected1 = true;
// // Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated

// const strA2 = "ABCD";
// const strB2 = "CDBA";
// const expected2 = false;
// // Explanation: all same letters in 2nd string, but out of order

function isRotation(s1, s2) {
  // is here
  let temp = "";
  let idx = s2.indexOf(s1[0]);
  for (let i = idx; i < s2.length; i++) {
    temp += s2[i];
  }
  if (idx > 0) {
    for (let i = 0; i < idx; i++) {
      temp += s2[i];
    }
  }
  return s1 == temp;
}
console.log(isRotation("ABACD", "ACDAB"));
console.log(isRotation("ABCD", "CADBA"));
