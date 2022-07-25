const { deepCopyObject } = require("./deepCopyObject");

describe("Deep copy object", () => {
  it("should return an object", () => {
    const firstTestObj = { name: "Frank" };
    expect(deepCopyObject(firstTestObj)).toBeInstanceOf(Object);
  });
  it("should return an object that is not the passed object", () => {
    const firstTestObj = { name: "Bruce", surname: "Wayne" };
    expect(deepCopyObject(firstTestObj) == firstTestObj).toBe(false);
  });
  it("should return exact copy of passed object", () => {
    const firstTestObj = { name: "Bruce", surname: "Wayne" };
    const secondTestObj = { name: "Peter", surname: "Parker", aunt: "May" };
    expect(deepCopyObject(firstTestObj)).toEqual(firstTestObj);
    expect(deepCopyObject(secondTestObj)).toEqual(secondTestObj);
  });
  it("should return deep copy of the passed object", () => {
    const firstTestObj = {
      name: "Bruce",
      surname: "Wayne",
      friends: [
        { codename: "Robin", names: ["Jason Todd", "Dick Grayson"] },
        "Catwoman",
        "Wonder Woman",
      ],
    };
    firstResultObject = deepCopyObject(firstTestObj);
    firstResultObject.name = "Clark";
    expect(firstTestObj.name).toBe("Bruce");
    expect(firstResultObject).toEqual({
      name: "Clark",
      surname: "Wayne",
      friends: [
        { codename: "Robin", names: ["Jason Todd", "Dick Grayson"] },
        "Catwoman",
        "Wonder Woman",
      ],
    });
  });
});
