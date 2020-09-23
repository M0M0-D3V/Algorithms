function countingValleys(n, s) {
  let count = 0;
  let tracker = 0;
  let isUp = false;
  if (n < 2) {
    return 0;
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "U") {
      tracker++;
    }
    if (s[i] === "D") {
      tracker--;
    }
    if (tracker > 0) {
      isUp = true;
    }
    if (tracker < 0) {
      isUp = false;
    }
    if (tracker === 0 && isUp === false) {
      count++;
    }
  }
  return count;
}

console.log(countingValleys(8, "UDDDUDUU"));
