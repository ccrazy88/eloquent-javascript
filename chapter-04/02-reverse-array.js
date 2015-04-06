function reverseArray(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.unshift(array[i]);
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  var left = 0;
  var right = array.length - 1;
  while (left < right) {
    var temp = array[left];
    array[left] = array[right];
    array[right] = temp;
    left++;
    right--;
  }
}
