const size = 8;
let chessboard = '';

for (let x = 0; x < size; x += 1) {
  for (let y = 0; y < size; y += 1) {
    chessboard += ((x + y) % 2 === 0) ? ' ' : '#';
  }
  chessboard += '\n';
}

console.log(chessboard);
