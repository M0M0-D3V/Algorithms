// A video player plays a game in which the character competes in a hurdle race. Hurdles are of varying heights, and the characters have a maximum height they can jump. There is a magic potion they can take that will increase their maximum jump height by 1 unit for each dose. How many doses of the potion must the character take to be able to jump all of the hurdles. If the character can already clear all of the hurdles, return 0.

// Function Description

// Complete the hurdleRace function in the editor below.

// hurdleRace has the following parameter(s):

// int k: the height the character can jump naturally
// int height[n]: the heights of each hurdle
// Returns

// int: the minimum number of doses required, always  or more

/*
 * Complete the 'hurdleRace' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY height
 */

function hurdleRace(k, height) {
    let dose = 0
    for(let num of height) {
        if( k < num) {
            let diff = num - k
            dose += diff
            k += diff
        }
    }
    return dose
}

console.log(hurdleRace(1, [1, 2, 3, 3, 2]))