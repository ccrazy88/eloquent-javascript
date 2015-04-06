function isObject(x) {
  return typeof x === 'object' && x !== null;
}

function getProperties(object) {
  var properties = [];
  for (var property in object) {
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

  var aProperties = getProperties(a);
  var bProperties = getProperties(b);
  if (aProperties.length !== bProperties.length) {
    return false;
  }

  for (var i = 0; i < aProperties.length; i++) {
    var property = aProperties[i];
    if (!(property in b) || !deepEqual(a[property], b[property])) {
      return false;
    }
  }
  return true;
}
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
