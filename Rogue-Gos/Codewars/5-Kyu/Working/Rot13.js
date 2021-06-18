// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// make helper function to convert char to numbers
const getAlpha = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const hashMap = {};
  alphabet.forEach((val, key) => (hashMap[val] = key));
  console.log(hashMap);
  return hashMap;
};

const findValue = (object, value) => {
  for (let key in object) {
    if (object.hasOwnProperty(key) && object[key] === value) {
      return key;
    }
  }
  return null;
};

function rot13(message) {
  const hashMap = getAlpha();
  const newMessage = message.split("");
  for (let i = 0; i < message.length; i++) {
    let char = message[i],
      getKey = 0;
    console.log(`****inside loop message[char]=${char}`);
    if (hashMap.hasOwnProperty(char)) {
      let position = hashMap[char];
      //   check if position + 13 is still inside alphabet
      if (position + 13 <= 25) {
        // call helper function to findValue
        getKey = findValue(hashMap, position + 13);
        // replace each char with the char in the pos 13+ after char pos
      } else {
        let difference = position + 12 - 25;
        console.log(`*** there is difference ${difference}`);
        getKey = findValue(hashMap, difference);
      }

      newMessage[i] = getKey;
    }
  }

  return newMessage.join("");
}
console.log(rot13("test"));
