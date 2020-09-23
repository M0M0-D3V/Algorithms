// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  // each row is the length of n
  let step = "";
  // nested loop
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j <= i) {
        step += "#";
      } else {
        step += " ";
      }
    }
    if (i < n) {
      step += "\n";
    }
  }
  console.log(step);
  return step;
}

steps(4);

module.exports = steps;
