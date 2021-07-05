// You work for an ad agency and your boss, Bob, loves a catchy slogan. He's always jumbling together "buzz" words until he gets one he likes. You're looking to impress Boss Bob with a function that can do his job for him.

// Create a function called sloganMaker() that accepts an array of string "buzz" words. The function returns an array of all possible UNIQUE string permutations of the buzz words (concatonated and separated by spaces).

// Your boss is not very bright, so anticipate him using the same "buzz" word more than once, by accident. The function should ignore these duplicate string inputs.

function sloganMaker(array) {
  // remove duplicate words from array
  let newArr = removeDuplicates(array);
  let results = [];
  for (var i = 0; i < newArr.length; i++) {
    let temp = newArr[i];
    for (var j = i + 1; j < newArr.length; j++) {
      temp += " " + newArr[j];
    }
    if (j < i) {
      for (j = 0; j < i; j++) {
        temp += " " + newArr[j];
      }
    }
    results.push(temp);
    console.log(results);
  }
  // return array of all possible UNIQUE string permutations concatenated and separated by space
  return results;
}

function removeDuplicates(arr) {
  let newArr = [];
  for (let word of arr) {
    if (!newArr.includes(word)) {
      newArr.push(word);
    }
  }
  return newArr;
}
sloganMaker(["super", "guacamole", "hot", "super"]);
