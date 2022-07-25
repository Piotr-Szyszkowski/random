function deepCopyObject(object) {
  objectCopy = JSON.parse(JSON.stringify(object));
  return objectCopy;
}

module.exports = { deepCopyObject };
