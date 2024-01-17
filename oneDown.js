function oneDown(str) {
  const dict = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if (typeof str !== "string") return "Input is not a string";

  let arr = str.split(" ");
  return arr
    .map((word) => {
      const wordArr = word.split("");
      const newWord = wordArr
        .map((l) => {
          const idx = dict.indexOf(l);
          return dict[idx - 1];
        })
        .join("");
      return newWord;
    })
    .join(" ");
}

console.log(oneDown("Ifmmp")); //
