function decodeStr(str) {
  // code here
  var newStr = "";
  for (var i = 1; i < str.length; i += 2) {
    for (var i = 0; i < parseInt(str[i]); i++) {
      newStr += str[i - 1];
      console.log(newStr);
    }
  }
  return newStr;
}

console.log(decodeStr("a3b2c1d3"));