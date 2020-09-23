// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const midpoint = n;
  const len = n + (n - 1);
  if (n < 1) {
    return null;
  }
  if (n == 1) {
    return "#";
  }
  for (let row = 0; row < n; row++) {
    let level = "";
    for (let column = 0; column < len; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
}

console.log(pyramid(4));

module.exports = pyramid;