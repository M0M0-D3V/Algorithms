/*
  Given an arr and a separator string, output a string of every item in the array separated by the separator.

  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/

const arr1 = [1, 2, 3];
const separator1 = ", ";
// const expected1 = "1, 2, 3"

// const arr2 = [1, 2, 3]
// const separator2 = "-"
// const expected2 = "1-2-3"

// const arr3 = [1, 2, 3]
// const separator3 = " - "
// const expected3 = "1 - 2 - 3"

// const arr4 = [1]
// const separator4 = ", "
// const expected4 = "1"

// const arr5 = []
// console.log(arr5.length)
// const separator5 = ", "
// const expected5 = ""

function join(arr, separator = ", ") {
  // code here
  var str = "";
  if (arr.length > 0) {
    for (var i = 0; i < arr.length; i++) {
      str += arr[i];
      if (i < arr.length - 1) {
        str += separator;
      }
    }
  }
  return str;
}

console.log(join(arr1, separator1));
/*****************************************************************************/

/*
    Book Index
  
    Given an arry of ints representing page numbers
    return a string with the page numbers formatted as page ranges when the nums span a consecutive range
  */

const nums1 = [1, 13, 14, 15, 37, 38, 70];
// const expected1 = "1, 13-15, 37-38, 70";

function bookIndex(pageNums) {
  // setup
  // variable
  var pageNumStr = "";
  var startIdx = 0;
  // loop through array
  for (var i = 0; i < pageNums.length - 1; i++) {
    var currentPage = pageNums[i];
    var nextPage = pageNums[i + 1];
    console.log(`i = ${i}- currentPage: ${currentPage}, nextPage: ${nextPage}`);
    // and check if next page is +1 of current page
    if (currentPage + 1 != nextPage) {
      // if not true - concat to new string
      pageNumStr += currentPage;
      console.log(pageNumStr);
    }
    // if true - concat page + -
    else {
      if()
      pageNumStr += `${currentPage}-`;
      // need to change place holder to hold
    }
    // check if we are at end of array
    if (i < pageNums.length - 1) {
      // add a comma if we are not at end
      pageNumStr += ", ";
    }
    startIdx = i + 1;
  }
  // clean up
  return pageNumStr;
}
var result = bookIndex(nums1);
console.log(result);
