const { firstFunc } = require("./firstFunc");

describe("Testing first function", () => {
  it("should return a string", () => {
    expect(typeof firstFunc()).toBe("string");
  });
  it("should return an exact shout with certain name passed", () => {
    expect(firstFunc("Adam")).toEqual("I am first Adam!");
  });
});
