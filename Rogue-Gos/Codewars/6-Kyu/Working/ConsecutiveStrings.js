// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Example:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// Note
// consecutive strings : follow one after another without an interruption

function longestConsec(strarr, k) {
  if (strarr.length == 0 || k > strarr.length || k <= 0) {
    return "";
  }
  let newArr = strarr;
  for (let i = 0; i < strarr.length - k; i++) {
    for (let j = i + 1; j <= i + k - 1; j++) {
      newArr[i] += strarr[j];
    }
  }
  let longest = newArr[0].length;
  let longestStr = newArr[0];
  for (let k = 0; k < newArr.length; k++) {
    if (newArr[k].length > longest) {
      longest = newArr[k].length;
      longestStr = newArr[k];
    }
  }

  return longestStr;
}
console.log(
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3)
);