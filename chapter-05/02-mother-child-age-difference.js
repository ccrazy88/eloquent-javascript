// Provided code
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var ancestry = JSON.parse(require('./ancestry.js'));
var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Solution
var differences = ancestry.filter(function(person) {
  return person.mother in byName;
}).map(function(person) {
  return person.born - byName[person.mother].born;
});

console.log(average(differences));
