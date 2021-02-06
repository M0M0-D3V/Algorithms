// Given two strings, write a method to decide if one is a permutation of the other

function checkPermutation(string1, string2) {
    if(string1.length != string2.length) {
        return false
    }
    for (let i = 0; i < string1.length; i++) {
        if(!string1.includes(string2[i])) {
            return false
        }
    }
    return true
}

console.log(checkPermutation("pikachu", "chukapi"))