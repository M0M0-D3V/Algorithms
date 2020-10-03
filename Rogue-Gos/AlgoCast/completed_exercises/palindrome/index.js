// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;

// function palindrome(str) {
//   const reversed = str
//     .split('')
//     .reverse()
//     .join('');
//
//   return str === reversed;
// }


// students
function isPalindrome(str, start = 0, end = str.length - 1) {

}


// LONGEST PALINDROME
function longestPalindromeSubstring(str) {
  if (str.length == 0) {
    return "";
  }
  let size, bound, i;
  for (size = str.length; size > 1; size--) {
    bound = str.length - size + 1;
    for (i = 0; i < bound; i++) {
      if (isPalindrome(str, i, i + size - 1)) {
        return str.substring(i, i + size);
      }
    }
  }
  return str[0];
}