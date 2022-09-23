const { shuffleArray } = require("./utils");

describe("shuffleArray should", () => {
  test("Should return array", () => {
    expect(shuffleArray).toBe(Array);
  });
  test("Should return array length to be the same as argument", (shuffleArray) => {
    expect(shuffleArray.length).toBe(shuffleArray);
  });
});
