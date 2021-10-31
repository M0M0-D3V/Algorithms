/*
  Given an array of objects / dictionaries to represent new inventory,
  and an array of objects / dictionaries to represent current inventory,
  update the quantities of the current inventory

  if the item doesn't exist in current inventory, add it to the inventory

  return the current inventory after updating it.
*/

const newInv1 = [
  { name: "Grain of Rice", quantity: 9000 },
  { name: "Peanut Butter", quantity: 50 },
  { name: "Royal Jelly", quantity: 20 },
]
const currInv1 = [
  { name: "Peanut Butter", quantity: 20 },
  { name: "Grain of Rice", quantity: 1 },
]
// const expected1 = [
//   { name: "Peanut Butter", quantity: 70 },
//   { name: "Grain of Rice", quantity: 9001 },
//   { name: "Royal Jelly", quantity: 20 },
// ]

const newInv2 = []
const currInv2 = [{ name: "Peanut Butter", quantity: 20 }]
// const expected2 = [{ name: "Peanut Butter", quantity: 20 }]

const newInv3 = [{ name: "Peanut Butter", quantity: 20 }]
const currInv3 = []
// const expected3 = [{ name: "Peanut Butter", quantity: 20 }]

function updateInventory(newInv, currInv) {
  // code here
  if(newInv.length < 1) {
    return currInv
  }
  else if(currInv.length < 1) {
    return newInv
  }
  for(let i = 0; i < newInv.length; i++) {
    let flag = false
    for(let j = 0; j < currInv.length; j++) {
      if(currInv[j].name == newInv[i].name) {
        currInv[j].quantity = newInv[i].quantity
        flag = true
      }
    }
    if(!flag) {
      currInv.push(newInv[i])
    }
  }
  return currInv
}

console.log(updateInventory(newInv1, currInv1))
console.log(updateInventory(newInv2, currInv2))
console.log(updateInventory(newInv3, currInv3))

/*****************************************************************************/

/*
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.

  Is there a quick way to determine if they aren't an anagram before spending more time?

  Given two strings
  return whether or not they are anagrams
*/

const strA1 = "yes";
const strB1 = "eys";
// const expected1 = true;

const strA2 = "yes";
const strB2 = "eYs";
// const expected2 = true;

const strA3 = "no";
const strB3 = "noo";
// const expected3 = false;

const strA4 = "silent";
const strB4 = "listen";
// const expected4 = true;

function isAnagram(s1, s2) {
  // code here
  return s1.toLowerCase().split("").sort().join() == s2.toLowerCase().split("").sort().join()
}

console.log(isAnagram(strA1, strB1))
console.log(isAnagram(strA2, strB2))
console.log(isAnagram(strA3, strB3))
console.log(isAnagram(strA4, strB4))

/*****************************************************************************/

/*
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

// const str1 = "   hello world     ";
// const expected1 = "hello world";

function trim(str) {
  // code here
  let start = 0
  let end = str.length-1
  let idx = 0
  while((str[start] == " " || str[end] == " ") && (start < end)) {
    if(str[start] == " "){
      start++
    }
    if(str[end] == " ") {
      end-- // decrement end after substring to include itself before decreasing for next loop consideration
    }
    idx++
  }
  return str.substring(start, ++end)
}
console.log(trim("     hello world     "))
console.log(trim("        hel lo wor ld     3    "))