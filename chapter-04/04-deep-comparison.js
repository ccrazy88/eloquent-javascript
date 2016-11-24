/* eslint-disable no-unused-vars */
function isObject(x) {
  return typeof x === 'object' && x !== null;
}

function getProperties(object) {
  const properties = [];
  /* eslint-disable guard-for-in, no-restricted-syntax */
  for (const property in object) {
  /* eslint-disable guard-for-in, no-restricted-syntax */
    properties.push(property);
  }
  return properties;
}

function deepEqual(a, b) {
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
}
