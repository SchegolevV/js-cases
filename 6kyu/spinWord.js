function spinWords(string) {
  const arr = string.split(" ");
  const res = arr.map((w) => {
    if (w.length >= 5) {
      return (w = w.split("").reverse().join("")); //=
    }
    return w;
  });
  return res.join(" ");
}

spinWords("stop spinnig"); //=
