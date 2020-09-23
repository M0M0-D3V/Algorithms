// NEXT KATA
/*This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x, y attributes. Triangle objects have attributes a, b, c describing their corners, each of them is a Point.

Write a function calculating perimeter of a Triangle defined this way.

Tests round answers to 6 decimal places.*/
function trianglePerimeter(triangle) {
    // your solution here
    // try creating classes for Triangle() and Point()
    let d1 = Math.round(
        Math.sqrt(
            Math.pow(triangle[1][0] - triangle[0][0], 2) +
            Math.pow(triangle[1][1] - triangle[0][1], 2)
        ).toFixed(6)
    );
    console.log("d1 is " + d1);
    let d2 = Math.round(
        Math.sqrt(
            Math.pow(triangle[2][0] - triangle[1][0], 2) +
            Math.pow(triangle[2][1] - triangle[1][1], 2)
        ).toFixed(6)
    );
    console.log("d2 is " + d2);

    let d3 = Math.round(
        Math.sqrt(
            Math.pow(triangle[0][0] - triangle[2][0], 2) +
            Math.pow(triangle[0][1] - triangle[2][1], 2)
        ).toFixed(6)
    );
    console.log("d3 is " + d3);

    return d1 + d2 + d3;
}
console.log(
    trianglePerimeter([
        [10, 10],
        [40, 10],
        [10, 50],
    ])
);