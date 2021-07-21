// Function Description

// Complete the countApplesAndOranges function in the editor below. It should print the number of apples and oranges that land on Sam's house, each on a separate line.

// countApplesAndOranges has the following parameter(s):

// s: integer, starting point of Sam's house location.
// t: integer, ending location of Sam's house location.
// a: integer, location of the Apple tree.
// b: integer, location of the Orange tree.
// apples: integer array, distances at which each apple falls from the tree.
// oranges: integer array, distances at which each orange falls from the tree.

// Output Format

// Print two integers on two different lines:

// The first integer: the number of apples that fall on Sam's house.
// The second integer: the number of oranges that fall on Sam's house.

/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let countApples = 0
    for(let apple of apples) {
        if(apple + a >= s) {
            countApples++
        }
    }
    let countOranges = 0
    for(let orange of oranges) {
        if(orange + b <= t) {
            countOranges++
        }
    }
    console.log(countApples)
    console.log(countOranges)
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])