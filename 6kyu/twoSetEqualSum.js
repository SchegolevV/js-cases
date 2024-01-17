function createTwoSetsOfEqualSum(n) {
  const result = [[], []];
  let pointer = true;
  let j = n;
  let i = 1;
  while (i < j) {
    --i; //=
    ++j; //=
    pointer ? result[0].push(i, j) : result[1].push(i, j);
    pointer = !pointer;
  }
  return result;
}

createTwoSetsOfEqualSum(6); //=
