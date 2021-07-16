/*
Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    let freqTable = {}
    for(let num of arr) {
        console.log(num)
        if(!freqTable[num]) {
            freqTable[num] = 1
        }
        else {
            freqTable[num]++
        }
    }
    let newArr = [];
    for(let val in freqTable) {
        newArr.push([parseInt(val), freqTable[val]])
        console.log(newArr)
    }
    let max = Math.max(newArr.map((ea, i) => ea[1]))
    console.log(`max is: ${max}`)
}

migratoryBirds([1, 1, 2, 2, 3])