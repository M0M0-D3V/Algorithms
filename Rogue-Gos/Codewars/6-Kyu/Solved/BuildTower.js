Build Tower
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Python: return a list;
JavaScript: returns an Array;
C#: returns a string[];
PHP: returns an array;
C++: returns a vector<string>;
Haskell: returns a [String];
Ruby: returns an Array;
Lua: returns a Table;
Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ',
  ' *** ',
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ',
  '    ***    ',
  '   *****   ',
  '  *******  ',
  ' ********* ',
  '***********'
]

function towerBuilder(nFloors) {
  const len = nFloors * 2 - 1;
  if (nFloors < 1) {
    return null;
  }
  if (nFloors == 1) {
    return ["#"];
  }
  let arr = [];
  for (let row = 0; row < nFloors; row++) {
    let level = "";
    for (let column = 1; column <= len; column++) {
      if (nFloors - row <= column && nFloors + row >= column) {
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
    arr.push(level);
  }
  return arr;
}
towerBuilder(7);

// [] build 2D array, an array of arrays
// [] length of columns is nFloors * 2 - 1
// [] midpoint of each line is math.ceil(len / 2)
// [] if nFloors is 3, then len is 5
// [] if 3 rows then 5 columns
