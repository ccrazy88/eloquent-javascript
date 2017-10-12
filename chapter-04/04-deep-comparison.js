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

  for (let i = 0; i < aProperties.length; i += 1) {
    const property = aProperties[i];
    if (!(property in b) || !deepEqual(a[property], b[property])) {
      return false;
    }
  }
  return true;
};
