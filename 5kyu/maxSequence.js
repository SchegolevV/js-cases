var maxSequence = function (arr) {
  let curArr = [];
  let currentSum = 0;
  let max = 0;
  let maxArr = [];

  for (const num of arr) {
    currentSum += num;
    max = Math.max(max, currentSum);
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return max;
};

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]); //=

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 100]);
// maxSequence([-2, 1, -1, 4, -1, 2, 1, -5, 4]);
