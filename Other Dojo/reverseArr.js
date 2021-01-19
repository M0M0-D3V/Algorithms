/* 
  Given an array, reverse it's items in place
  return the array after reversing it
  Do it in place without using any built in methods
*/

const arr1 = [1, 2, 3];
const expected1 = [3, 2, 1];

const arr2 = ["a", "b"];
const expected2 = ["b", "a"];

const arr3 = ["a"];
const expected3 = ["a"];

const arr4 = [];
const expected4 = [];

function reverseArr(arr) {
    // without Math.floor the middle item would be swapped with itself. Wouldn't cause a problem but is unnecessary
    for(let left = 0; left < Math.floor(arr.length / 2); left++) {
        // each loop will initialize a new right and reallocate with the value of the last index in array, scooted one more to the left each loop ( minus left)
        const right = arr.length - 1 - left;
        // initialize and set temp variable with the left value in array
        const temp = arr[left];
        // arr[left] is temp'ed out so we can now swap the right to the left
        arr[left] = arr[right];
        // swap into right the left value from temp 
        arr[right] = temp;
        
    }
    return arr;
}

console.log(reverseArr(arr1))

module.exports = { reverseArr };
/**
 * Reverses the given arr in place without built in methods.
 * - Time: O(?).
 * - Space: O(?).
//  * @param {Array<any>} arr
//  * @return {Array<any>} The given arr after being reversed.
 */