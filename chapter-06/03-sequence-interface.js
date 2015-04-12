// One method:
//
// next(): returns the next element if there is one; otherwise returns
// undefined.

function ArraySeq(array) {
  this.values = array;
}

ArraySeq.prototype.next = function() {
  return this.values.shift();
};

function RangeSeq(from, to) {
  this.from = from;
  this.to = to;
}

RangeSeq.prototype.next = function() {
  var next = this.from <= this.to ? this.from : undefined;
  if (next) {
    this.from++;
  }
  return next;
};

function logFive(sequence) {
  for (var i = 0; i < 5; i++) {
    var next = sequence.next();
    if (next) {
      console.log(next);
    } else {
      break;
    }
  }
}
