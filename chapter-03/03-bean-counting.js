const countChar = (str, char) => {
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str.charAt(i) === char) {
      count += 1;
    }
  }
  return count;
};

const countBs = str => countChar(str, "B");
