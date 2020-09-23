function jumpingOnClouds(c) {
  let jumpCount = 0;

  for (let i = 0; i < c.length; i++) {
    console.log(`starting the loop, i is now ${i}`);

    if (i + 2 < c.length && c[i + 2] === 0) {
      jumpCount++;
      console.log(jumpCount);
      console.log(`if i + 2 then i is now ${i}`);
      i++;
    } else if (
      (c[i + 1] === 0 && c[i + 2] !== 0) ||
      (c[i + 1] === 0 && i + 2 >= c.length)
    ) {
      jumpCount++;
      console.log(jumpCount);
      console.log(`if i + 1 then i is now ${i}`);
    }
  }

  return jumpCount;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
