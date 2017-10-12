const range = (start, end, step) => {
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
};

const sum = array => array.reduce((a, b) => a + b);

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
