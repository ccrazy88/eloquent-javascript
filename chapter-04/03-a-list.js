const arrayToList = array => {
  if (array.length === 0) {
    return null;
  }
  return { rest: arrayToList(array.slice(1)), value: array[0] };
};

const listToArray = list => {
  if (list === null) {
    return [];
  } else if (list.rest === null) {
    return [list.value];
  }
  return [list.value].concat(listToArray(list.rest));
};

const prepend = (element, list) => {
  return { rest: list, value: element };
};

const nth = (list, n) => {
  if (n < 0 || list === null) {
    return undefined;
  } else if (n === 0) {
    return list.value;
  }
  return nth(list.rest, n - 1);
};

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
