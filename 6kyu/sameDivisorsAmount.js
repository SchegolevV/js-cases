const delsCount = (n) => {
  let res = 2;
  let i = 2;
  while (i * i < n) {
    if (n % i === 0) res += 2;
    i++;
  }
  if (i * i === n) res++;
  return res;
};

function countPairsInt(diff, nMax) {
  // let stack = []
  let res = 0;
  for (let i = 2; i < nMax - diff; i++) {
    if (delsCount(i) === delsCount(i + diff)) res++;
  }
  return res;
}
countPairsInt(7, 1000); //=
