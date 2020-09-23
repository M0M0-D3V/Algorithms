// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//NOTES---------------------------------------------------------------------
// Use regular exression to replace any characters I do not want to include ...
//... var word = "hello!!" ===> word.replace (/[^\g, "").toLowerCase();

//Make a character map for both stringA and stringB to compare them to eachother

// I will compare the length of the keys in each object.  The key length has to be equal in order to be an anagram
// Object.keys(obj).length ====> javascript method to get the keys of an object.

function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  // case to check if length of keys.  Must be strA===strB to be an anagram.
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  //to iterate over an "object" ( let char IN)
  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

function buildCharMap(str) {
  const charMap = {};

  //regular expression to remove unwanted chars and to lowercase the string as well
  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}
console.log(anagrams("rail! safety!", "fairy tales"));

module.exports = anagrams;
