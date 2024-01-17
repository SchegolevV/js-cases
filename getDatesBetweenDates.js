const getDays = (a, b) => (a - b) / 1000 / 3600 / 24;
const getDaysBetweenDates = (...dates) => {
  if (dates.length < 2) throw TypeError("Перейдате 2 аргумента");

  let firstDate = new Date(dates[0]);
  let lastDate = new Date(dates[1]);

  if (isNaN(firstDate) || isNaN(lastDate)) {
    return NaN;
  }

  const result = Math.trunc(getDays(lastDate, firstDate));
  return result === 0 ? 0 : result;
};




console.log("null, null", 0 === getDaysBetweenDates(null, null));
console.log(
  "null, new Date()",
  19491 === getDaysBetweenDates(null, new Date())
);
console.log(
  "new Date(), new Date()",
  0 === getDaysBetweenDates(new Date(), new Date())
);
console.log(
  "new Date(2011, 6, 2, 6, 0), new Date(2012, 6, 2, 18, 0)",
  366 ===
    getDaysBetweenDates(new Date(2011, 6, 2, 6, 0), new Date(2012, 6, 2, 18, 0))
);
console.log(
  "new Date(2014, 8, 4, 24), new Date(2014, 8, 4, 23, 59)",
  // 3 ===
  getDaysBetweenDates(new Date(2014, 8, 4, 24), new Date(2014, 8, 4, 23, 59))
);