function range(start, end, step) {
  var array = [];
  if (step === undefined) {
    step = start <= end ? 1 : -1;
  }

  if (step > 0) {
    for (var up = start; up <= end; up += step) {
      array.push(up);
    }
  } else if (step < 0) {
    for (var down = start; down >= end; down += step) {
      array.push(down);
    }
  }

  return array;
}

function sum(array) {
  return array.reduce(function(a, b) {return a + b;});
}
