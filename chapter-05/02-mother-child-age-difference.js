// Provided code
const average = array => {
  const plus = (a, b) => a + b;
  return array.reduce(plus) / array.length;
};

const ancestry = JSON.parse(require("./ancestry.js"));

const byName = {};
ancestry.forEach(person => {
  byName[person.name] = person;
});

// Solution
const differences = ancestry
  .filter(person => person.mother in byName)
  .map(person => person.born - byName[person.mother].born);
console.log(average(differences));
