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

// const str4 = "bbcc"
// const expected4 = "bbcc"

function encodeStr(str) {
  var newStr = "";
  var count = 1;
  for (var i = 0; i < str.length; i++) {
    var currentChar = str[i];
    var nextChar = str[i + 1];
    if (currentChar === nextChar) {
      count++;
    } else {
      newStr += currentChar + count;
      count = 1;
    }
  }
  if (newStr.length === str.length) {
    return str;
  }
  return newStr;
}
console.log(encodeStr("aaaabbcddd"));

/*****************************************************************************/

/*
    String Decode

    Given a string, create a function that repeats each letter by the number that follows
  */

// const str1 = "a4b2c1d3";
// const expected1 = "aaaabbcddd";

function decodeStr(str) {
  // code here
  var newStr = "";
  for (var i = 0; i < str.length; i++) {
    var convertNum = parseInt(str[i]);
    if (convertNum) {
      for (var j = 0; j < convertNum; j++) {
        newStr += str[i - 1];
      }
    }
  }
  return newStr;
}

console.log(decodeStr("a4b2c1d3"));
