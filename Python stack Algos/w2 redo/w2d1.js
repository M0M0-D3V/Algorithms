// Theme: Strings & Objects

/*
  Given an array of strings
  return a sum to represent how many times each array item is found (a frequency table)

  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not

    Python: key in dict
*/

// const arr1 = ["a", "a", "a"]
// const expected1 = {
//   a: 3,
// }

// const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"]
// const expected2 = {
//   a: 2,
//   b: 1,
//   c: 3,
//   B: 1,
//   d: 1,
// }

// const arr3 = []
// const expected3 = {}

function frequencyTableBuilder(arr) {
  // code here
  let map = {}
  for(let i = 0; i < arr.length; i++) {
    let num = arr[i]
    if(map[num]) {
      map[num]++
    }
    else {
      map[num] = 1
    }
  }
  return map
}

console.log(frequencyTableBuilder(["a", "a", "b", "b", "c", "a", "a", "b"]))

/*****************************************************************************/

/*
    Reverse Word Order
  
    Given a string of words (with spaces)
    return a new string with words in reverse sequence.
  */

// const str1 = "This is a test";
// const expected1 = "test a is This";

function reverseString(str) {
  // code here
  let newStr = ""
  let temp = ""
  for(let i = 0; i < str.length; i++) {
    if(str[i] != " ") {
      temp += str[i]
    }
    else {
      temp += " "
      newStr = temp + newStr
      temp = ""
    }
  }
  newStr = `${temp} ${newStr}`
  return newStr
}
  console.log(reverseString("This is a test"))
