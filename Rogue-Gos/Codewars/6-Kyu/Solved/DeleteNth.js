// Task
// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

// Example
//   deleteNth ([1,1,1,1],2) // return [1,1]

//   deleteNth ([20,37,20,21],1) // return [20,37,21]

function deleteNth(arr, n) {
    let hash = {}
    let newArr = []
    for (num of arr) {
        if (hash[num] == n) {}
        if (!hash[num]) {
            hash[num] = 1
            newArr.push(num)
        } else if (hash[num] < n) {
            hash[num]++
            newArr.push(num)
        }
    }
    return newArr
}
console.log(deleteNth([20, 37, 20, 21], 1))