// Provided code
const average = array => array.reduce((a, b) => a + b) / array.length;
const ancestry = JSON.parse(require("./ancestry.js"));

// Solution
const groupBy = (array, f) => {
  const grouped = {};
  array.forEach(element => {
    const group = f(element);
    if (group in grouped) {
      grouped[group].push(element);
    } else {
      grouped[group] = [element];
    }
  });
  return grouped;
};

const centuries = groupBy(ancestry, person => Math.ceil(person.died / 100));
Object.keys(centuries).forEach(century => {
  const people = centuries[century];
  const ages = people.map(person => person.died - person.born);
  console.log(century, ":", average(ages));
});
