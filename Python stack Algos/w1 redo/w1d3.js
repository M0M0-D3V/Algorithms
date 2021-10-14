/*
  String Encode

  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears.


  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

// const str1 = "aaaabbcddd"
// const expected1 = "a4b2c1d3"

// const str2 = ""
// const expected2 = ""

// const str3 = "a"
// const expected3 = "a"

// const str4 = "bbcc"  // b2c2  -> length is both 4
// const expected4 = "bbcc"

function encodeStr(str) {
  // your code
  let newStr = ""
  for(let i = 0; i < str.length; i++) {
    let count = 1
    newStr += str[i]
    while(str[i] == str[i + 1]) {
      count++
      i++
    }
    newStr += count
  }
  if(newStr.length >= str.length) {
    return str
  }
  return newStr
}

console.log(encodeStr("aaaabbcddd"))
console.log(encodeStr("a"))
console.log(encodeStr("aaa"))

/*****************************************************************************/

/*
      String Decode
  
      Given a string, create a function that repeats each letter by the number that follows
    */

// const str1 = "a3b2c1d3";
// const expected1 = "aaabbcddd";

function decodeStr(str) {
  // code here
  let newStr = ""
  for(let i = 0; i < str.length; i++) {
    if(isNaN(str[i])) {
      newStr += str[i]
    }
    if(!isNaN(str[i + 1])) {
      let count = parseInt(str[i + 1])
      while(count > 1) {
        newStr += str[i]
        count--
      }
    }
  }
  return newStr
}

console.log(decodeStr("a3b2c1d3"))