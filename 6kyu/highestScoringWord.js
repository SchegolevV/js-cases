function high(x) {
  const alph = "abcdefghijklmnopqrstuvwxyz";
  const arr = x.split(" ");

  const stringSum = (str) => {
    let sum = 0; //=
    for (let char of str) {
      sum += alph.indexOf(char) + 1;
    }
    return sum; //=
  };

  return arr.reduce((acc, cur) =>
    stringSum(acc) >= stringSum(cur) ? acc : cur
  ); //=
}

high("volcano climbing"); //=

"hello" > "i";
