// It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue from 1 to n. Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.

// Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

// Example
// q = [ 1, 2, 3, 5, 4, 6, 7, 8]

// If person 5 bribes person 4, the queue will look like this: 1, 2, 3, 5, 4, 6, 7, 8. Only 1 bribe is required. Print 1.

// q = [ 4, 1, 2, 3 ]
// Person 4 had to bribe 3 people to get to the current position. Print Too chaotic.

// Function Description

// Complete the function minimumBribes in the editor below.

// minimumBribes has the following parameter(s):

// int q[n]: the positions of the people after all bribes
// Returns

// No value is returned. Print the minimum number of bribes necessary or Too chaotic if someone has bribed more than 2 people.

/*
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
    let count = 0
    for(let i = 0; i < q.length; i++) {
        let person = q[i]
        if(person - i > 1) {
            let diff = person - i - 1
            if(diff > 2) {
                console.log("Too chaotic")
                return
            }
            else {
                count += diff            
            }
        }
    }
    console.log(count)
}

minimumBribes([1, 2, 3, 5, 4, 6, 7, 8])
minimumBribes([ 4, 1, 2, 3 ])
minimumBribes([2, 5, 1, 3, 4])
minimumBribes([2, 1, 5, 3, 4])
minimumBribes([5, 1, 2, 3, 7, 8, 6, 4])
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]) // should be 7