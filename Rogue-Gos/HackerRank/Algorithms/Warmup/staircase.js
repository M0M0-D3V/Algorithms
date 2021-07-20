// Staircase detail

// This is a staircase of size n=4:

//    #
//   ##
//  ###
// ####
// Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size n.

// Function Description

// Complete the staircase function in the editor below.

// staircase has the following parameter(s):

// int n: an integer
// Print

// Print a staircase as described above.

// Input Format

// A single integer, n, denoting the size of the staircase.

function staircase(n) {
    for(let i = 0; i < n; i++) {
        let oneStair = ""
        for(let j = 0; j < n - i - 1; j++) {
            oneStair += " "
        }
        for(j = n - i; j < n + 1; j++) {
            oneStair += "#"
        }
        console.log(oneStair)
    }
}

staircase(6)