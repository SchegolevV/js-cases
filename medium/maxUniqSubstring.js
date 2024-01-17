var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let currentLength = 0;
  let current = "";
  for (const char of s) {
    if (current.includes(char)) {
      current = current.slice(current.indexOf(char) + 1); //=
    }
    current += char;
    currentLength = current.length; //=
    max = Math.max(max, currentLength);
  }
  return max;
};

lengthOfLongestSubstring("cbavn"); //=
lengthOfLongestSubstring("cba"); //=
lengthOfLongestSubstring("cbasns"); //= 5
lengthOfLongestSubstring("cbab"); //=
lengthOfLongestSubstring("qwerqqwertyuop"); //= 9
lengthOfLongestSubstring("dvdf"); //= 3
lengthOfLongestSubstring("dvdf"); //= 3
lengthOfLongestSubstring("aabaab!bb"); //= 3
