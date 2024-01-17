function encrypt(text, n) {
  let i = 1;
  const arr = text.split(""); //=
  while (i <= n) {
    arr.sort((a, b) => {
      if (arr.indexOf(a) % 2 === 0) {
        return 1;
      }
      if (arr.indexOf(b) % 2 === 0) {
        return -1;
      }
    });
    i++;
  }
  return arr.join("");
}

encrypt("This is a test!", 1); //=

function decrypt(encryptedText, n) {
  let i = 1;
  const arr = encryptedText.split("");
  while (i <= n) {
    arr.sort((a, b) => {
      if (arr.indexOf(a) % 2 === 0) {
        return 1;
      }
      if (arr.indexOf(b) % 2 === 0) {
        return -1;
      }
    });
    i++;
  }
  return arr;
}
decrypt("hssesTh i a tt!", 1); //=
