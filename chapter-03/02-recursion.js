const isEven = n => {
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else if (n < 0) {
    return isEven(-n);
  }
  return isEven(n - 2);
};
