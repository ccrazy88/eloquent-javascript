const { range } = require("../global");

const countChar = (str, char) => {
  let count = 0;
  for (const i of range(0, str.length)) {
    if (str.charAt(i) === char) {
      count += 1;
    }
  }
  return count;
};

const countBs = (str) => countChar(str, "B");

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
