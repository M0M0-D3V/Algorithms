// Is Unique - implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?


// basic method
function isUnique(str) {
    let seen = []
    for(let char of str) {
        if(seen[char]) {
            return false
        }
        else {
            seen[char] = char
        }
    }
    return true
}

console.log(isUnique("abcdefg"))
// Time complexity is O(n) where n is the length of the string.
// Space complexity is O(1). the forloop will never iterate more than 128 characters if you set the fail fast to > 128 length. if you don't set it, it can be expressed O(c) where c is the size of the character set


// ************************************************
// no additional structure method
function isUniqueAdvanced(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = str.length - 1; j > i; j--) {
            if(str[i] == str[j]) {
                return false
            }
        }
    }
    return true
}
console.log(isUniqueAdvanced("abcdbk"))
// O(n^2) time and O(1) space

// ***************************************BOOK METHODS
// Should first ask interviewer if string is ASCII string or a Unicode string.
// this shows eye for detail and a solid foundation in computer science
