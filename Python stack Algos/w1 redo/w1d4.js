/*
  String: Is Palindrome

  Create a function that returns a boolean whether the string is a strict palindrome.
    - palindrome = string that is same forwards and backwards

  Do not ignore spaces, punctuation and capitalization
 */ //           >>  <<
//               v   v
// const str1 = "a x a"
// const expected1 = true

// const str2 = "racecar"
// const expected2 = true

// const str3 = "Dud"
// const expected3 = false

// const str4 = "oho!"
// const expected4 = false

function isPalindrome(str) {
  // code here
  for(let i = 0; i < str.length / 2; i++) {
    if(str[i] != str[str.length - 1 - i]) {
      return false
    }
  }
  return true
}

console.log(isPalindrome("racecar"))
console.log(isPalindrome("!dude!"))

/*****************************************************************************/

/*
    Longest Palindrome
    
    For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring.
    
    Built in methods: .slice() .substring()
    Strings longer or shorter than complete words are OK.
    
    All the substrings of "abc" are:
    a, ab, abc, b, bc, c
    */

// const str1 = "what up, daddy-o?";
// const expected1 = "dad";

// const str2 = "uh, not much";
// const expected2 = "u";

// const str3 = "Yikes! my favorite racecar erupted!";
// const expected3 = "e racecar e";

function longestPalindromicSubstring(str) {
  // code here
  let longest = str[0]
  for(let i = 0; i < str.length; i++) {
    for(let j = i + 1; j < str.length; j++) {
      let temp = str.substring(i, j + 1)
      if(isPalindrome(temp) && temp.length > longest.length) {
        longest = temp
      }
    }
  }
  return longest
}

console.log(longestPalindromicSubstring("uh, not much"))
console.log(longestPalindromicSubstring("Yikes! my favorite racecar erupted!"))