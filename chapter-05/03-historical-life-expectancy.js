// Provided code
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var ancestry = JSON.parse(require('./ancestry.js'));

// Solution
function groupBy(array, f) {
  var grouped = {};
  array.forEach(function(element) {
    var group = f(element);
    if (group in grouped) {
      grouped[group].push(element);
    } else {
      grouped[group] = [element];
    }
  });
  return grouped;
}

var centuries = groupBy(ancestry, function(person) {
  return Math.ceil(person.died / 100);
});

for (var century in centuries) {
  var ages = centuries[century].map(function(person) {
    return person.died - person.born;
  });
  console.log(century, ":", average(ages));
}
