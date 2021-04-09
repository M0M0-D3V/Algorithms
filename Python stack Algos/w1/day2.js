function validParens(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == "(") {
      count += 1;
      console.log(count, "(");
    }
    if (str[i] == ")") {
      count -= 1;
      console.log(count, ")");
    }
    if (count < 0) {
      return false;
    }
  }
  if (count !== 0) {
    return false;
  } else {
    return true;
  }
}
console.log(validParens("N(0)t ) 0(k"));
