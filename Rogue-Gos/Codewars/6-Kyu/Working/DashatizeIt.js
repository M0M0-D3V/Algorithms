// Given a number, return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

function dashatize(num) {
  let numstr = num.toString();
  for (let i = 0; i < numstr.length; i++) {
    if (
      numstr[i] % 2 != 0 &&
      i != 0 &&
      (numstr[i - 1] != "-" || num[i + 1] != "-")
    ) {
      // numstr
    }
  }
}
dashatize(3221111);
