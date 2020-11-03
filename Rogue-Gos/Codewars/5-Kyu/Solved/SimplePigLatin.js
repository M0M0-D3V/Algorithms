// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// logic points:
// [x] split the string into substrings separated by space
// [x] loop through each substring and move first char to last position
// [x] find a way to detech non alphanumeric chars
// [x] once discovered, record the value and position in the substring
// [x] find a way to clean each substring from special characters
// [x] if special char is at end of substring, just pop
// [x] if not, move it to end of substring by swapping and then pop
// [] add back the special characters from hashT

function pigIt(str) {
    let strArr = str.split(" ")
    let theSpecials = {}
    for(char of str) {
        if(hasSpecial(char)) {
            theSpecials[str.indexOf(char)] = char
            console.log(theSpecials)
        }
    }
    let temp = []
    for(let i = 0; i < strArr.length; i++) {
        temp.push(Ay(strArr[i]))
    }
    return temp.join(" ");

}

function Ay(word) {
    let cleanWord = findSpecials(word)
    if(cleanWord) {
        let splitword = cleanWord.split("");
        let first = splitword.shift();
        splitword.push(first + "ay");
        return splitword.join("")
    }
    return word
}


function findSpecials(word) {
    let tempWord = word
    for (let i = 0; i < word.length; i++) {
        if(hasSpecial(word[i])) {
            if(i == tempWord.length - 1) {
                tempWord = tempWord.split("")
                tempWord.pop()
                tempWord = tempWord.join("")
            }
            else {
                removeSpecial(tempWord, tempWord.indexOf(tempWord[i]))
            }
        }
    }
    return tempWord
}

function hasSpecial(str){
    return /[~`!#$%\^&*+=\-\[\]\\';,./{}|\\":<>\?]/g.test(str);
}

function removeSpecial(word, index) {
    console.log("we are in removeSpecial f(x)")
    let temp = word[index]
    for(let i = index; i < word.length - 1;i++) {
        word[i] = word[i + 1]
    }
    word[word.length - 1] = temp
    return word
}

let wow = hasSpecial(".")
console.log(wow)
console.log(pigIt("what will happen dfd meow  ?"))