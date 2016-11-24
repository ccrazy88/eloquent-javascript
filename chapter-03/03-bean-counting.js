/* eslint-disable no-unused-vars */
function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str.charAt(i) === char) {
      count += 1;
    }
  }
  return count;
}

function countBs(str) {
  return countChar(str, 'B');
}
