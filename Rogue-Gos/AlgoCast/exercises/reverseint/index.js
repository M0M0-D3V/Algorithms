// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let isNeg = false;
  if (n < 0) {
    isNeg = true;
  }
  let numstring = Math.abs(n).toString();
  let revnumstr = "";
  for (let i = numstring.length - 1; i >= 0; i--) {
    revnumstr += numstring[i];
  }

  if (isNeg) {
    return revnumstr * -1;
  }
  return revnumstr * 1;
}

reverseInt(-76);

module.exports = reverseInt;
