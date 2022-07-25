function deepCopyObject(object) {
  objectCopy = { ...object };
  return objectCopy;
}
const firstTestObj = {
  name: "Bruce",
  surname: "Wayne",
  friends: ["Robin", "Catwoman", "Wonder Woman"],
};

const secondTestObj = deepCopyObject(firstTestObj);

console.log(firstTestObj);
console.log(secondTestObj);
secondTestObj.friends.push("me");
console.log(firstTestObj);
console.log(secondTestObj);
