function equalEdgedStrings(words) {
    let hash = {}
    let result = []
    for (let i = 0; i < words.length - 1; i++) {
        if (words[i][0] == words[i + 1][0] && words[i][words[i].length - 1] == words[i + 1][words[i + 1].length - 1]) {
            result.push(true)
        } else {
            result.push(false)
        }
    }
    return result
}
let words = ["abcd", "abdd", "da", "dd"]
console.log(equalEdgedStrings(words))