const uniqueInOrder = function (iterable) {
  if (typeof iterable === 'string') {
    iterable = [...iterable]
  }
  let result = [];
  iterable.forEach((element, i, arr) => {
    if (element !== arr[i + 1]) {
        result.push(element)
    }
  })
  return result;
};

uniqueInOrder('AAAABBBCCDAABBBB') //=