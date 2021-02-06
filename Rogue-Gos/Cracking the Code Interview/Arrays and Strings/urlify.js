// WRite a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.

// input: "Mr John Smith     ", 13
// output: "Mr%20John%20Smith"

function urlify(string1, truLength) {
    
    return string1.trim().replace(/ /g, "%20")
}

console.log(urlify("Mr John Smith     ", 13))

// var str = "Mr Blue has a blue house and a blue car";
// var res = str.replace(/ /g, "pink");
// console.log(res)