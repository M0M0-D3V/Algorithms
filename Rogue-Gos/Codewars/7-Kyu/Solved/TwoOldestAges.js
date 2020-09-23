function twoOldestAges(ages) {
    var max = ages[0];
    var max2 = ages[0];
    var x = 0;
    for (x in ages) {
        if (max < ages[x]) {
            max2 = max;
            max = ages[x];
        }
    }
    var pmax = ages.indexOf(max);
    if (pmax < ages.length) {
        for (var i = pmax; i < ages.length; i++) {
            if (ages[i] > max2 && ages[i] < max) {
                max2 = ages[i];
            }
        }
    }
    return [max2, max];
}
var blah = twoOldestAges([35, 2, 1, 67, 4, 9, 32, 75, 9]);
console.log(blah); // should return [67,75]