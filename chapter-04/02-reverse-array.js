const reverseArray = array => {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
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
