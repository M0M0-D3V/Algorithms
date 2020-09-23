// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  //make hash table with each unique char as key and count as value
  // compare current count with maxcount in hash
  const hash = {};
  let max = 0;
  let maxChar = "";
  for (let char of str) {
    if (hash[char]) {
      hash[char]++;
    } else {
      hash[char] = 1;
    }
  }
  for (let char in hash) {
    if (hash[char] > max) {
      max = hash[char];
      maxChar = char;
    }
  }
  console.log(maxChar);
  console.log(max);
  console.log(hash);
  return maxChar;
}

maxChar("why are you like this?");

module.exports = maxChar;
