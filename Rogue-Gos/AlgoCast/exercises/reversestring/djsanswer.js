// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// SAMPLE SOLUTION #1
// =======================================================
function reverse(str) {
  var reversed = "";

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

//SAMPLE SOLUTION #2
//=======================================================
function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = palindrome;
