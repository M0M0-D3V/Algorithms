// convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]

function convertFrac(lst) {
  // each index of array is a fraction, 0 index is numerator, 1 index is denominator
  // while isFound is false
  var isFound = false;
  var denom = 0;
  var multiplier = 1;
  while (!isFound) {
    var count = 0;
    denom = lst[0][1] * multiplier;
    for (var i = 1; i < lst.length; i++) {
      if (denom % lst[i][1] === 0) {
        count++;
      }
    }
    if (count == lst.length - 1) {
      isFound = true;
    } else {
      isFound = false;
    }
    multiplier++;
  }
  var result = "";
  for (var i = 0; i < lst.length; i++) {
    var temp = lst[i][0] * (denom / lst[i][1]);
    result += `(${temp},${denom})`;
  }
  return result;
}
var result = convertFrac([
  [3, 3],
  [2, 5],
  [3, 4],
]);
console.log(result);
