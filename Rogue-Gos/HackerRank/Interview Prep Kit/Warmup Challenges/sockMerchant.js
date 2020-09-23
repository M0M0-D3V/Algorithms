function sockMerchant(n, ar) {
  const hashAr = hashtable(ar);
  console.log(hashAr);
  let count = 0;
  for (let k in hashAr) {
    if (hashAr[k] > 1) {
      count += Math.floor(hashAr[k] / 2);
    }
  }
  return count;
}

function hashtable(array) {
  const hash = {};
  for (let num of array) {
    if (hash[num]) {
      hash[num]++;
    } else {
      hash[num] = 1;
    }
  }
  return hash;
}
console.log(sockMerchant(9, [10, 20, 30, 40, 10, 20, 30, 20, 30]));
