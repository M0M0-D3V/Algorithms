// given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. You can ignore casing and non-letter characters

// Example:
// Input: Tact Coa
// Output: True (permutations: 'taco cat', 'atco cta', etc..)

function isPalindromePermutation(string1) {
    // clean string with just lowercase and omit spaces and special characters
    let newString = string1.replace(/[^A-Za-z]/g, "").toLowerCase().replace(" ", "")
    // create data structures
    let seenChar = {}
    let counter = 0
    // loop through each char of newString
    for(let char of newString) {
        console.log(char)
        // check if char is already in seenChar
        if(seenChar[char]) {
            console.log(`has ${char}`)
            // if already seenChar then add 1
            seenChar[char]++
            // check if seenChar is even or odd
        }
        if(seenChar[char] % 2 != 0) {
            // if odd, then increase counter
            console.log(counter)
            counter++
            console.log(`has own prop ${char} and seenChar[char] is ${seenChar[char]} and counter is ${counter}`)
        }
        else {
            seenChar[char] = 1
            console.log(`adding ${char}`)
        }
    }
    if(counter <= 1) {
        return true
    }
    return false
}

console.log(isPalindromePermutation("racecar"))