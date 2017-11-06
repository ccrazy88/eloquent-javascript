const { range } = require("../global");

// Interface
// ---------
// next(): returns the next element if there is one; otherwise returns
// undefined.

class ArraySeq {
  constructor(array) {
    this.values = array;
  }

  next() {
    return this.values.shift();
  }
}

class RangeSeq {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  next() {
    const next = this.from <= this.to ? this.from : null;
    if (next) {
      this.from += 1;
    }
    return next;
  }
}

const logFive = sequence => {
  // eslint-disable-next-line no-unused-vars
  for (const i of range(0, 5)) {
    const next = sequence.next();
    if (next) {
      console.log(next);
    } else {
      break;
    }
  }
};

logFive(new ArraySeq([1, 2]));
logFive(new RangeSeq(100, 1000));
