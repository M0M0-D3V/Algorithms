/* NEXT KATA
Given a 2D array of size m * n. Find the sum of minimum value in each row
example: (below array is m = 3 and n = 5)
[
    [1, 2, 3, 4, 5], //min value of row is 1
    [5, 6, 7, 8, 9], //min value of row is 5
    [20, 21, 34, 56, 100] //min value of row is 20
]
Function should return 26 because sum of minimums is: 1 + 5 + 20 = 26
Note, always given non-empty array containing positive values*/

function sumOfMinimums(arr) {
    var sumMins = 0;
    // outerloop
    for (var i = 0; i < arr.length; i++) {
        let lowestInRow = arr[i][0];
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] < lowestInRow) {
                lowestInRow = arr[i][j];
            }
        }
        sumMins += lowestInRow;
    }
    return sumMins;
}
var blah = [
    [1, 2, 3, 4, 5], //min value of row is 1
    [5, 6, 7, 8, 9], //min value of row is 5
    [20, 21, 34, 56, 100], //min value of row is 20
];
console.log(sumOfMinimums(blah));