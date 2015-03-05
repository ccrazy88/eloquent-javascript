var size = 8;
var chessboard = "";

for (var x = 0; x < size; x++) {
  for (var y = 0; y < size; y++) {
    chessboard += ((x + y) % 2 === 0) ? " " : "#";
  }
  chessboard += "\n";
}

console.log(chessboard);
