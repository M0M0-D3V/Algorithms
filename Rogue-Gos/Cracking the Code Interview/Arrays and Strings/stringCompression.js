// implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3.
// If the compressed string would not become smaller than the original string, return the original string.
// you can assume the string has only uppercase and lowercase letters

function compressString(str) {
    let newString = ""
    let count = 1;
    for (let i = 0; i < str.length - 1; i++) {
        if(str[i] == str[i + 1]) {
            count++
            if(i + 1 == str.length - 1) {
                newString += str[i] + count
            }
        }
        else {
            newString += str[i] + count
            count = 1
        }
    }
    if(newString.length < str.length) {
        return newString
    }
    else {
        return str
    }
}

console.log(compressString('aabcccccaa'))