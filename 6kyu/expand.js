function expandedForm(num) {
  let n = `${num}`.split("");

  let res = [];

  n.map((el, i, arr) => {
    if (el != "0") {
      let numOfnulls = arr.length - i - 1; //=
      res.push(`${Number(`${el}e${numOfnulls}`)}`); //=
    } else {
      return "";
    }
  });
  return res.join(" + ");
}
expandedForm(70305); //=
