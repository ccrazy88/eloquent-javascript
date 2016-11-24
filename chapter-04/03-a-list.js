/* eslint-disable no-unused-vars */
function arrayToList(array) {
  if (array.length === 0) {
    return null;
  }
  return { value: array[0], rest: arrayToList(array.slice(1)) };
}

function listToArray(list) {
  if (list === null) {
    return [];
  } else if (list.rest === null) {
    return [list.value];
  }
  return [list.value].concat(listToArray(list.rest));
}

function prepend(element, list) {
  return { value: element, rest: list };
}

function nth(list, n) {
  if (n < 0 || list === null) {
    return undefined;
  } else if (n === 0) {
    return list.value;
  }
  return nth(list.rest, n - 1);
}
