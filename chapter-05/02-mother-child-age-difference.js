// Provided code
const ancestry = JSON.parse(require("./ancestry"));

const average = (array) => array.reduce((a, b) => a + b) / array.length;
const byName = {};
ancestry.forEach((person) => {
  byName[person.name] = person;
});

// Solution
const differences = ancestry
  .filter((person) => person.mother in byName)
  .map((person) => person.born - byName[person.mother].born);

console.log(average(differences));
