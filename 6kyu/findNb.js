function findNb(m) {
  let acc = 0;
  let pow = (n) => Math.pow(n, 3);
  let i = 1;
  while (acc < m) {
    acc += pow(i);
    i++;
  }
  acc;
  return acc === m ? i - 1 : -1;
}

findNb(4183059834009); //=
// findNb(24723578342962); //=
