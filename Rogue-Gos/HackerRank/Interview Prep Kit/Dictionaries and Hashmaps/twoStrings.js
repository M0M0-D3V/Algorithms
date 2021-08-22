// Given two strings, determine if they share a common substring. A substring may be as small as one character.

// Example
// s1 = 'and'
// s2 = 'art'

// These share the common substring a.
// s1 = 'be'
// s2 = 'cat'


// These do not share a substring.

// Function Description

// Complete the function twoStrings in the editor below.

// twoStrings has the following parameter(s):

// string s1: a string
// string s2: another string
// Returns

// string: either YES or NO
// Input Format

// The first line contains a single integer p, the number of test cases.

// The following p pairs of lines are as follows:

// The first line contains string s1.
// The second line contains string s2.
// Constraints

// s1 and s2 consist of characters in the range ascii[a-z].
// Output Format

// For each pair of strings, return YES or NO.

/*
 * Complete the 'twoStrings' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function twoStrings(s1, s2) {
    let flag = false
    let s1Split = s1.split("")  
    let s2Split = s2.split("")
    for(let i = 0; i < s1Split.length; i++) {
        if (s1Split[i] === " ") {
            s1Split.splice(i, 1)
        }
        if(s2Split.includes(s1Split[i])) {
            flag = true
        }
    }
    return flag === true ? "YES" : "NO" 
}
console.log(twoStrings("hello world", "maaaa"))
// something 