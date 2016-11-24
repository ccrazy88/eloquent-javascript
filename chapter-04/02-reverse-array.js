/* eslint-disable no-unused-vars */
function reverseArray(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    newArray.unshift(array[i]);
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const temp = array[left];
    /* eslint-disable no-param-reassign */
    array[left] = array[right];
    array[right] = temp;
    /* eslint-enable no-param-reassign */
    left += 1;
    right -= 1;
  }
}
