//remove needless ways

function dirReduce(arr) {
  const map = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    EAST: "WEST",
    WEST: "EAST",
  };
  let res = [];
  for (const way of arr) {
    if (res[res.length - 1] === map[way]) {
      res.pop();
    } else {
      res.push(way);
    }
  }
  return res;
}
dirReduce(["NORTH", "SOUTH", "SOUTH", "EAST", "EAST", "WEST"]); //=
