// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

// Test.assertSimilar(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
// Test.assertSimilar(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])
// Test.assertSimilar(sortArray([]),[])

function sortArray(array) {
    if (array.length == 0) {
        return array;
    }
    let newArr = [];
    let hash = {};
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            hash[i] = array[i];
        } else {
            newArr.push(array[i]);
            console.log(hash, newArr);
        }
    }
    newArr.sort((a, b) => {
        return a - b
    });
    for (let key in hash) {
        newArr.splice(parseInt(key, 10), 0, hash[key]);
    }
    return newArr;
}

console.log(sortArray([5, 3, 2, 8, 1, 4]))