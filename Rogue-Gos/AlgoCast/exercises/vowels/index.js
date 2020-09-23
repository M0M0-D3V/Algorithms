// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let count = 0;
  let lowerStr = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (
      lowerStr[i] === "a" ||
      lowerStr[i] === "e" ||
      lowerStr[i] === "i" ||
      lowerStr[i] === "o" ||
      lowerStr[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}

module.exports = vowels;
