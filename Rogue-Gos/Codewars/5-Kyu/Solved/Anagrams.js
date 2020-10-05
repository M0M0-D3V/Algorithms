// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

// function anagrams(word, words) {
//     const wordHash = makeHash(word)
//     let trigger = false
//     let newArr = []
//     for (one of words) {
//         let thisOne = makeHash(one)
//         for (char in wordHash) {
//             if (!thisOne[char]) {
//                 trigger = true
//             }
//         }
//         if (trigger == false) {
//             newArr.push(one)
//         }
//     }
//     return newArr
// }

// function makeHash(word) {
//     let hash = {}
//     for (let i = 0; i < word.length; i++) {
//         if (!hash[word[i]]) {
//             hash[word[i]] = 1
//         } else {
//             hash[word[i]]++
//         }
//     }
//     return hash
// }

// console.log(makeHash('abba'))
// console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))

function anagrams(word, words) {
    let arr = []
    for (oneWord of words) {
        if (cleanString(word) === cleanString(oneWord)) {
            arr.push(oneWord)
        }
    }
    return arr
}

function cleanString(str) {
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))