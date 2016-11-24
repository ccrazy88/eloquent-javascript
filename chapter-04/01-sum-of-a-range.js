/* eslint-disable no-unused-vars */
function range(start, end, step) {
  const array = [];
  let derivedStep = step;
  if (derivedStep === undefined) {
    derivedStep = start <= end ? 1 : -1;
  }

  if (derivedStep > 0) {
    for (let up = start; up <= end; up += derivedStep) {
      array.push(up);
    }
  } else if (derivedStep < 0) {
    for (let down = start; down >= end; down += derivedStep) {
      array.push(down);
    }
  }

  return array;
}

function sum(array) {
  return array.reduce((a, b) => a + b);
}
