// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let len = str.length;
  let arr = [];
  let newStr = "";
  arr.push(str[0].slice().toUpperCase());
  for (let i = 1; i < len; i++) {
    if (str[i] == " ") {
      let capThis = str[i + 1].slice().toUpperCase();
      arr.push(str[i]);
      arr.push(capThis);
      i++;
    } else {
      arr.push(str[i]);
    }
  }
  newStr = arr.join("");
  return newStr;
}

console.log(capitalize("i haven't pooped today yet sad face"));
module.exports = capitalize;
