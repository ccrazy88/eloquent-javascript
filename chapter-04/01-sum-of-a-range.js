const { range: globalRange } = require("../global");

const range = (start, stop, step) => {
  let derivedStep = step;
  if (typeof derivedStep === "undefined") {
    derivedStep = start <= stop ? 1 : -1;
  }

  // Derive a new stop value because globalRange does not include stop but this
  // version of range requires it.
  let derivedStop = stop;
  if (derivedStep > 0) {
    derivedStop += 1;
  } else if (derivedStep < 0) {
    derivedStop -= 1;
  }

  return Array.from(globalRange(start, derivedStop, derivedStep));
};

const sum = (array) => array.reduce((a, b) => a + b);

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
