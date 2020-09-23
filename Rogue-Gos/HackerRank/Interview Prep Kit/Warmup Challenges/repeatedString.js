function repeatedString(s, n) {

  let newS = "";

  let counter = 0;
  if (s.length === 1 && s[0] == "a") {
    return n;
  }

  if (s.length > n) {
    return howMany(newString(s, n));
  } else {
    let mod = n % s.length;
    let times = Math.floor(n / s.length);
    console.log(`mod is ${mod} and times is ${times}`)
    return s.length * times + howMany(newString(s, mod));
  }
}

function newString(str, num) {
  let newS = "";
  for (let i = 0; i < num; i++) {
    newS += str[i];
  }
  return newS;
}

function howMany(str) {
  let counter = 0;
  for (let char of str) {
    if (char == "a") {
      counter++;
    }
  }
  return counter;
}

console.log(repeatedString("aba", 10));