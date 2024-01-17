var setZeroes = function (matrix) {
  // let nullsLoc = {
  //     col: [],
  //     rows: []
  // }

  // matrix.forEach((row, i) => {
  //     if (row.includes(0)) {
  //         nullsLoc.rows.push(i) //=
  //     }
  // })
  // nullsLoc
  // for (index of nullsLoc.rows) {
  //     matrix[index].fill(0, 0)
  // }
  // matrix
  [1, 1, 1] > [1, 1, 0];

  matrix.reduce((acc, i) => {}, [matrix[0]]);
};

const matrix = [
  [1, 1, 1, 0],
  [1, 0, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 0],
];
matrix.sort((a, b) => a - b);

// весь ряд превращается в нули
// все элементы с теим же индексом превращаются в нули
setZeroes(matrix);
