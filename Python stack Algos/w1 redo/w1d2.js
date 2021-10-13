/*
  Given an arr and a separator string, output a string of every item in the array separated by the separator.

  No trailing separator at the end
  Bonus: Default the separator to a comma with a space after it if no separator is provided
*/

// const arr1 = [1, 2, 3]
// const separator1 = ", "
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
// const separator5 = ", "
// const expected5 = ""

// const arr6 = [1, 2, 3]
// separator is not given
// const expected 6 = "1, 2, 3"
function join(arr, separator = ", ") {
  // code here
  let newStr = ""
  for(let i = 0; i < arr.length - 1; i++) {
    newStr += arr[i] + separator
  }
  newStr += arr[arr.length - 1]
  return newStr
}

console.log(join([1, 2, 3, 4, 5, 6]))
/*****************************************************************************/

/*
    Book Index
  
    Given an array of ints representing page numbers
    return a string with the page numbers formatted as page ranges when the nums span a consecutive range
  */

// const nums1 = [1, 13, 14, 15, 37, 38, 70];
// const expected1 = "1, 13-15, 37-38, 70";

function bookIndex(pageNums) {
  let newStr = ""
  let start
  let end
  for(let i = 0; i < pageNums.length - 1; i++) {
    if(pageNums[i + 1] != pageNums[i] + 1) {
      newStr += pageNums[i] + ", "
    } else {
      start = pageNums[i]
      while(pageNums[i] + 1 === pageNums[i + 1] && i < pageNums.length) {
        console.log(i)
        i++
        console.log("i is now: ", pageNums[i])
      }
      end = pageNums[i]
      newStr += `${start}-${end}, `
    }
  }
  newStr += pageNums[pageNums.length - 1]
  return newStr
}

console.log(bookIndex([1, 2, 3, 4, 5, 13, 14, 15, 17, 20, 24, 25, 26, 27]))
