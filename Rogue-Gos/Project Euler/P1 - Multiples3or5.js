function Multiples3or5(limit) {
  let sum = 0;
  for (let i = 0; i < limit; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      console.log(`${i} is a multiple of 3 or 5.`);
      sum += i;
      console.log(`sum is now ${sum}`);
    }
  }
  return sum;
}

Multiples3or5(1000);
