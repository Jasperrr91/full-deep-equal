const equal = (firstObject, secondObject) => {
  // Initial type comparison
  if (typeof firstObject !== typeof secondObject) return false;
  const type = (typeof firstObject);

  // String/Num comparison
  if (type === 'string' || type === 'number' || type === 'undefined' || type === 'boolean' || type === 'null') {
    return firstObject === secondObject;
  }

  if (type === 'symbol') {
    return firstObject.toString() === secondObject.toString();
  }

  // Array comparison
  if (type === 'object' && Array.isArray(firstObject)) {
    if (firstObject.length !== secondObject.length) return false;

    // Loop over both arrays
    for (let i = 0; i < firstObject.length; i++) {
      let matchingElementFound = false;

      for (let j = 0; j < secondObject.length; j++) {
        // Compare array elements
        if (equal(firstObject[i], secondObject[j])) matchingElementFound = true;
      }

      if (!matchingElementFound) return false;
    }
    return true;
  }

  // Object comparison
  if (type === 'object') {
    let objectsEqual = true;
    Object.keys(firstObject).forEach((key) => {
      if (!equal(firstObject[key], secondObject[key])) objectsEqual = false;
    });
    return objectsEqual;
  }

  return false;
};

module.exports = equal;
