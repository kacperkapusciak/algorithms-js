const naiveStringSearch = require("../src/naiveStringSearch");

describe("Naive string search", () => {
  it("should return number of patterns match in a string", () => {
    expect(naiveStringSearch("hello hello hello hi", "hello")).toBe(3);
    expect(naiveStringSearch("hello hello hello hi", "hi")).toBe(1);
    expect(naiveStringSearch("quick brown fox jumps over the lazy dog", "brown fox")).toBe(1);
  });

  it("should return 0 when pattern is not found", () => {
    expect(naiveStringSearch("quick brown fox jumps over the lazy dog", "cat")).toBe(0);
    expect(naiveStringSearch("quick brown fox jumps over the lazy dog", "dogs")).toBe(0);
  });
});
