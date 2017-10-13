const { range } = require("../global");

const isObject = x => typeof x === "object" && x !== null;

const getProperties = object => {
  const properties = [];
  for (const property in object) {
    properties.push(property);
  }
  return properties;
};

const deepEqual = (a, b) => {
  if (a === b) {
    return true;
  }
  if (!isObject(a) || !isObject(b)) {
    return false;
  }

  const aProperties = getProperties(a);
  const bProperties = getProperties(b);
  if (aProperties.length !== bProperties.length) {
    return false;
  }

  for (const i of range(0, aProperties.length)) {
    const property = aProperties[i];
    if (!(property in b) || !deepEqual(a[property], b[property])) {
      return false;
    }
  }
  return true;
};

const obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
