// function equalEdgedStrings(words) {
//     let hash = {}
//     let result = []
//     for (let i = 0; i < words.length - 1; i++) {
//         if (words[i][0] == words[i + 1][0] && words[i][words[i].length - 1] == words[i + 1][words[i + 1].length - 1]) {
//             result.push(true)
//         } else {
//             result.push(false)
//         }
//     }
//     return result
// }
// let words = ["abcd", "abdd", "da", "dd"]
// console.log(equalEdgedStrings(words))


function binaryPatternMatching(pattern, s) {
    let count = 0
    let temp = ""
    s.toLowerCase()
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u' || s[i] == 'y') {
            temp += "0"
        } else {
            temp += "1"
        }
    }
    for (let i = 0; i < s.length - pattern.length + 1; i++) {
        let sub = temp.substring(i, i + pattern.length)
        if (pattern == sub) {
            count++
        }
    }
    return count
}

console.log(binaryPatternMatching("00", "aaaaaaaa"))