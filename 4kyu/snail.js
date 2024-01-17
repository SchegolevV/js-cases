// snail = function (array) {
//   let n = array[0].length - 1;
//   if (!n) return [];
//   let res = [];
//   let col = 0;
//   let row = 0;
//   while (res.length < n * n) {
//     col;
//     row;
//     res.push(array[row][col]);
//     if (col < n && row < n && row == 0) {
//       col++;
//     } else if (col > 0 && row >= n) {
//       col--;
//     } else if (row >= n && col >= 0) {
//       row--;
//     } else if (col <= n && row <= n) {
//       row++;
//     }
//   }
//   return res;
// };
let array = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
];

const snail = (arr) => {
  let res = [];
  let stack = {};
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (!arr[i][j] && arr[i + 1][j]) {
        res.push(arr[i + 1][j]);
      }

      // res.push(arr[i][j])
    }
  }
  return res;
};

console.log(snail(array));
