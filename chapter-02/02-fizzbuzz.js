const { range } = require("../global");

for (const n of range(1, 101)) {
  let s = "";
  if (n % 3 === 0) {
    s += "Fizz";
  }
  if (n % 5 === 0) {
    s += "Buzz";
  }
  console.log(s || n);
}
