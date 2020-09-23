// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
    let strArr = str.split(" ")
    console.log(strArr);
    let what = strArr.map(i => {
        Ay(i)
    }).join(" ")
    console.log(what);
    return what;
}

function Ay(word) {
    let splitword = word.split("");
    let first = splitword.shift();
    console.log(splitword);
    console.log(`first is ${first}`)
    let wordAy = splitword.push(first);
    console.log(wordAy.toString());
    return word
}

console.log(pigIt("what will happen?"))