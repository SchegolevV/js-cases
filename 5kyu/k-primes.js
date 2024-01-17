function countKprimes(k, start, nd) {}

function puzzle(s) {}

// countKprimes(5, 500, 600) --> [500, 520, 552, 567, 588, 592, 594]

// 1. Вернуть массив значений из k-primes чисел между start и end

const primeFactors = (n) => {
  let arr = [];
  for (let i = 2; n > 1; i++)
    if (n % i === 0) {
      n /= i; //=
      arr.push(i);
      i = 1;
    }
  return arr.length;
};
