// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const hashMap = {}
    alphabet.forEach((val, key) => hashMap[key] = val)
    console.log(hashMap)
    const newmessage = message.split("");
    for (let i = 0; i < newmessage.length; i++) {
        newmessage[i] = hashMap[newmessage[i]] + hashMap[i + 13]
        console.log(newmessage[i], hashMap[i + 13])
    }
    return newmessage;
}
console.log(rot13("zewhatht"))