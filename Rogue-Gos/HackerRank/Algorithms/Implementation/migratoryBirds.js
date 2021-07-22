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
        if(!freqTable[num]) {
            freqTable[num] = 1
        }
        else {
            freqTable[num]++
        }
    }
    let max = 1
    for(let num in freqTable) {
        if(freqTable[num] > max) {
            max = freqTable[num]
        }
    }
    let newArr = [];
    for(let num in freqTable) {
        if(freqTable[num] === max) {
            newArr.push([parseInt(num), freqTable[num]])
            console.log(newArr)
        }
    }
    console.log(`max is: ${newArr[0][0]}`)
    return newArr[0][0]
}

migratoryBirds([1, 1, 2, 2, 3])