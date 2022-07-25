function deepCopyObject(object) {
  objectCopy = { ...object };
  return objectCopy;
}

module.exports = { deepCopyObject };
