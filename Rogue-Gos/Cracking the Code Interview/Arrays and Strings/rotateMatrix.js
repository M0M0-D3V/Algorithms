// given an image represented by an N x N matrix, where each pixel in the iamge is represented by an integer, write a method to rotate the image by 90 degrees. Can you do this in place?

// row 0     [ (0,0), (0,1), (0,2), (0,3) ]
// row 1     [ (1,0), (1,1), (1,2), (1,3) ]
// row 2     [ (2,0), (2,1), (2,2), (2,3) ]
// row 3     [ (3,0), (3,1), (3,2), (3,3) ]

function rotateMatrix(matrix) {
    // check if it is empty or if the sides are not same length n x n
    if(matrix.length == 0 || matrix.length != matrix[0].length) return false
    let length = matrix.length
    for(let layer = 0; layer < length; layer++) {
        let first = layer
        let last = length - 1 - layer
        for(let i = first; i < last; i++) {
            let offset = i - first
            let top = matrix[first][i]    // save top

            // left -> top
            matrix[first][i] = matrix[last-offset][first]
            
            // bottom -> left
            matrix[last-offset][first] = matrix[last][last - offset]

            // right -> bottom
            matrix[last][last-offset] = matrix[i][last]

            // top -> right
            matrix[i][last] = top   // right <- saved top
        }
    }
    return matrix
}