// seriously???
function fizzBuzz(n) {
    // I would approach this with a reverse logic of what outcome would have the most specific requirements to be met.
    for(let i = 1; i <= n; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
                console.log("FizzBuzz")
        }
        else if(i % 3 == 0) {
            console.log("Fizz")
        }
        else if(i % 5 == 0) {
            console.log("Buzz")
        }
        else {
            console.log(i)
        }
    }

}

fizzBuzz(15)
