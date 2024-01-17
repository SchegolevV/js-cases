const combos = (num, start = 1) => {
  if (!num) return [[]];

  let result = [];
  for (let i = start; i <= num; i++) {
    result.push(...combos(num - i, i).map((combo) => [i, ...combo]));
  }

  return result;
};

combos(5); //=
