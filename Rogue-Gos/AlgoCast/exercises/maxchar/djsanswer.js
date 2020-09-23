// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";

  //Use "for of" to iterate over ther "charMap" of the string,..
  //..to create an 'object-map', in order to log the character counts.
  //If the char of str does not yet exist, instantiate it, else, ..
  //..increment it's count by 1;
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  //new loop to iterate through character-map "charMap". Use "for in" syntax..
  //..to iterate over an object.
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
