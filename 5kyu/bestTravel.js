function chooseBestSum(t, k, ls) {
  const arr = ls
    .reduce(
      (pre, val) => [
        ...pre,
        ...pre.filter((val) => val.length < k).map((v) => [...v, val]),
      ],
      [[]]
    )
    .filter((val) => val.length === k);

  return arr.reduce((acc, i) => {
    if (t - i < 0) {
      return 0;
    }
    return t - i <= acc ? t - i : acc;
  }, t);
}

const arr = [9, 2, 6, 10, 12];

chooseBestSum(25, 3, arr); //=
