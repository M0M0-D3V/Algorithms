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
    var v = Array(MAX_CHAR).fill(0);
    
    // increment vector index for every
    // character of str1
    for (var i = 0; i < s1.length; i++) {
        v[s1[i] - 'a'] = true;
    }
    
    // checking common substring of str2 in str1
    for (var i = 0; i < s2.length; i++) {
        if (v[s2[i] - 'a'])
        return true;
    }
    
    return false;    
}