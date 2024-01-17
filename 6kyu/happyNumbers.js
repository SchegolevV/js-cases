function happyNumbers(x) {
  let res = [];
  for (let i = 0; i <= x; i++) {
    isHappy(i, []) ? res.push(i) : null;
  }
  return res;
}

const isHappy = (n, seen) => {
  if (n === 1) {
    return true;
  }
  const num = `${n}`.split("").reduce((acc, i) => +i * i + +acc, 0); //=
  if (seen.indexOf(num) !== -1) {
    return false;
  }
  seen[num] = +num;

  return isHappy(+num, seen);
};

happyNumbers(10); //=
