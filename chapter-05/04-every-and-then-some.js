/* eslint-disable no-unused-vars */
function every(array, f) {
  for (let i = 0; i < array.length; i += 1) {
    if (!f(array[i])) {
      return false;
    }
  }
  return true;
}

function some(array, f) {
  for (let i = 0; i < array.length; i += 1) {
    if (f(array[i])) {
      return true;
    }
  }
  return false;
}
