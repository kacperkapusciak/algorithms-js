const linearSearch = require("../src/linearSearch");

describe("Linear search", () => {
  it("should return index of found element", () => {
    expect(linearSearch([2, 3, 4, 5, 6, 7, 8, 9, 10], 8)).toEqual(6);
    expect(linearSearch([1, 2, 3, 4, 5], 3)).toEqual(2);
    expect(linearSearch([1], 1)).toEqual(0);
    expect(linearSearch([1, 3, 5, 7, 9], 9)).toEqual(4);
  });

  it("should return -1 when element is not found", () => {
    expect(linearSearch([[2, 3, 4, 5, 6, 7, 8, 9, 10], 0])).toEqual(-1);
    expect(linearSearch([1, 2, 3, 4, 5], 6)).toEqual(-1);
    expect(linearSearch([1], 11)).toEqual(-1);
    expect(linearSearch([1, 3, 5, 7, 9], -21)).toEqual(-1);
  });
});