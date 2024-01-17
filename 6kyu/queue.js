function queueTime(customers, n) {
  const w = new Array(n).fill(0);
  for (let t of customers) {
    let idx = w.indexOf(Math.min(...w));
    w[idx] += t;
  }
  return Math.max(...w); //11
}
let customers = [1, 2, 10, 3, 12];
console.log(queueTime(customers, 2));
