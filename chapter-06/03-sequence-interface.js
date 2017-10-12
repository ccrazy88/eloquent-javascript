// One method:
//
// next(): returns the next element if there is one; otherwise returns
// undefined.

class ArraySeq {
  constructor(array) {
    this.values = array;
  }
}

ArraySeq.prototype.next = () => this.values.shift();

class RangeSeq {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
}

RangeSeq.prototype.next = () => {
  const next = this.from <= this.to ? this.from : undefined;
  if (next) {
    this.from += 1;
  }
  return next;
};

const logFive = sequence => {
  for (let i = 0; i < 5; i += 1) {
    const next = sequence.next();
    if (next) {
      console.log(next);
    } else {
      break;
    }
  }
};
