function repeatedString(s, n) {
  if (s.length === 1 && s[0] == "a") {
    return n;
  }
  if (s.length > n) {
    return howMany(newString(s, n));
  } else {
    let mod = n % s.length; // 10 % 3 = 1
    let times = Math.floor(n / s.length); // 10 / 3 = 3
    console.log(`mod is ${mod} and times is ${times}`);
    return s.length * times + howMany(newString(s, mod)); // 3 * 3 + 1
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

// ************
// there is a string s, of lowercase english letters that is repeated infinitely many times. given an integer, n, find and print the number of letter a's in the first n letters of the infinite string

// example:
// input s: 'abcac'
// input n: 10
// outcome: 4

function repeatedString2(str, len) {
  if (str.length == 1 && str[0] === "a") {
    return len;
  }
  if (str.length > len) {
    // if str is bigger than length, return count from string up to len
    return count(str, len);
  } else {
    // if len is bigger
    // get diff and concat str to itself in newStr to match len
    let mod = len % str.length; // use mod to pull partial string
    let times = Math.floor(len / str.length); // times to loop
    let newStr = "";
    for (let i = 0; i < times; i++) {
      newStr += str;
    }
    return count(str, len) * times + count(str, mod);
  }
}

function count(str, len) {
  let count = 0;
  for (let i = 0; i < len; i++) {
    if (str[i] === "a") {
      count++;
    }
  }
  return count;
}
console.log(repeatedString2("aba", 10));
