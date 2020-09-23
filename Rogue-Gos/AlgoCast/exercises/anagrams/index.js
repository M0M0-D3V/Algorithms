// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// to use lodash, npm i lodash
var isEqual = require("lodash.isequal");

function anagrams(stringA, stringB) {
  const hashA = hashTable(stringA);
  const hashB = hashTable(stringB);
  console.log(hashA);
  console.log(hashB);
  // 1 method is to use the imported Lodash
  //   return isEqual(hashA, hashB);

  // 2 method is to loop and return false if !==
  for (let char in hashA) {
    console.log(`we made it to the loop line 21`);
    if (hashA[char] !== hashB[char]) {
      return false;
    }
  }
  return true;
}

function hashTable(string) {
  const hash = {};
  const stringLower = string.replace(/[^\w\s]/gi, "").toLowerCase();
  console.log(stringLower);
  for (let char of stringLower) {
    if (hash[char]) {
      hash[char]++;
    } else {
      hash[char] = 1;
    }
  }
  return hash;
}

console.log(anagrams("One One", "Two two two"));
module.exports = anagrams;
