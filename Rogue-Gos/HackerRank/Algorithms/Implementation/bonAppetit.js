// Complete the bonAppetit function in the editor below. It should print Bon Appetit if the bill is fairly split. Otherwise, it should print the integer amount of money that Brian owes Anna.

// bonAppetit has the following parameter(s):

// bill: an array of integers representing the cost of each item ordered
// k: an integer representing the zero-based index of the item Anna doesn't eat
// b: the amount of money that Anna contributed to the bill

// Output Format

// If Brian did not overcharge Anna, print Bon Appetit on a new line; otherwise, print the difference (i.e., ) that Brian must refund to Anna. This will always be an integer.

/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k - item anna did not eat
 *  3. INTEGER b - amount anna gave brian
 */

function bonAppetit(bill, k, b) {
    let annaSum = 0
    for(let i = 0; i < bill.length; i++) {
        if(i != k) {
            annaSum += bill[i]
        }
    }
    if(annaSum / 2 == b) {
        console.log("Bon Appetit")
        return "Bon Appetit"
    }
    let ans = Math.abs(Math.floor(annaSum / 2) - b)
    console.log(ans)
    return ans
}

console.log(bonAppetit([3, 10, 2, 9], 1, 12))