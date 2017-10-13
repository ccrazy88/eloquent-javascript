const { range } = require("../global");

const size = 8;
let chessboard = "";
for (const x of range(0, size)) {
  for (const y of range(0, size)) {
    chessboard += (x + y) % 2 === 0 ? " " : "#";
  }
  chessboard += "\n";
}

console.log(chessboard);
