const range = function* range(start, stop, step = 1) {
  if (step < 0 && start > stop) {
    for (let i = start; i > stop; i += step) {
      yield i;
    }
  } else if (step > 0 && start < stop) {
    for (let i = start; i < stop; i += step) {
      yield i;
    }
  }
};

module.exports = { range };
