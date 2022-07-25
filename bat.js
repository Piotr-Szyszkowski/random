function deepCopyObject(object) {
  objectCopy = { ...object };
  return objectCopy;
}
const firstTestObj = {
  name: "Bruce",
  surname: "Wayne",
  friends: ["Robin", "Catwoman", "Wonder Woman"],
};

console.log(deepCopyObject(firstTestObj));
