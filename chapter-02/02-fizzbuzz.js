for (n = 1; n <= 100; n++) {
  var s = "";
  if (n % 3 === 0) {
    s += "Fizz";
  }
  if (n % 5 === 0) {
    s += "Buzz";
  }
  console.log(s || n);
}
