/*
  String: Reverse

  Given a string,
  return a new string that is the given string reversed
*/

// const str1 = "creature"
// const expected1 = "erutaerc"

// const str2 = "dog"
// const expected2 = "god"

function reverseString(str) {
  // code here
  let newStr = ""
  for(let i = str.length - 1; i >= 0; i--) {
    newStr += str[i]
  }
  return newStr
}

console.log(reverseString("creature"))
console.log(reverseString("dog"))

/*****************************************************************************/

/*
    Acronyms
  
    Create a function that, given a string, returns the string’s acronym
    (first letter of each word capitalized).
  
    Do it with .split first if you need to, then try to do it without
  */

// const str1 = " there's no free lunch - gotta pay yer way. ";
// const expected1 = "TNFL-GPYW";

// const str2 = "Live from New York, it's Saturday Night!";
// const expected2 = "LFNYISN";

function acronymize(str) {
  // code here
  str = str.trim()
  let newStr = str[0]
  for(let i = 0; i < str.length - 1; i++) {
    if(str[i] == " ") {
      newStr += str[i + 1]
    }
  }
  return newStr.toUpperCase()
}

console.log(acronymize(" there's no free lunch - gotta pay yer way. "))

/*****************************************************************************/

/* case insensitive string compare */

//   const strA1 = "ABC";
//   const strB1 = "abc";
//   const expected1 = true;

//   const strA2 = "ABC";
//   const strB2 = "abd";
//   const expected2 = false;

//   const strA3 = "ABC";
//   const strB3 = "bc";
//   const expected3 = false;

function caseInsensitiveStringCompare(strA, strB) {
  // code here
  return strA.toUpperCase() === strB.toUpperCase()
}

console.log(caseInsensitiveStringCompare("ABC", "abc"))
console.log(caseInsensitiveStringCompare("ABC", "abd"))
