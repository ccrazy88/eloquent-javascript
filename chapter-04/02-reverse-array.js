const { range } = require("../global");

const reverseArray = array => {
  const newArray = [];
  for (const i of range(0, array.length)) {
    newArray.unshift(array[i]);
  }
  return newArray;
};

const reverseArrayInPlace = array => {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const temp = array[left];
    array[left] = array[right];
    array[right] = temp;
    left += 1;
    right -= 1;
  }
};

console.log(reverseArray(["A", "B", "C"]));
const arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
