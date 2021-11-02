const performance = require('perf_hooks').performance;

function fib(n) {
    //Base Case
    if (n<2) {
        return n;
    }

    //Dividing problem into sub problems
    return fib(n-1) + fib(n-2);
}

function fib2(n) {
    var arr = [0,1];
    arr.length = n+1;
    // [0, 1, null, null, null]
    function fib2Helper(num) {
        if(num <2) {
            return arr[num];
        }
        if(arr[num] == null) {
            arr[num] = fib2Helper(num-1) + fib2Helper(num-2);
        }

        return arr[num-1] + arr[num-2];

    }
    return fib2Helper(n);

}

console.log(fib2(15));


var startTime = performance.now();
console.log(fib(15));
var endTime = performance.now();

console.log("Our fibonacci recursive function took " + (endTime - startTime) + " ms");

var startTime = performance.now();
console.log(fib2(15));
var endTime = performance.now();

console.log("Our fibonacci recursive with memoization function took " + (endTime - startTime) + " ms");

function fibIter(n) {
    var a = 0;
    var b = 1;
    var oldB = b;

    if(n<2) {
        return n;
    }

    for(var index=2; index<n; index++) {
        oldB = b;
        b = a+b;
        a = oldB;

    }

    return a +b;


}

var startTime = performance.now();
console.log(fibIter(15));
var endTime = performance.now();

console.log("Our fibonacci iterative function took " + (endTime - startTime) + " ms");