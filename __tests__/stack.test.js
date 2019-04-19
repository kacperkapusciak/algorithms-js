const Stack = require("../src/stack");


describe("Stack", () => {

  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it("should create empty stack", () => {
    expect(stack.first).toBeNull();
    expect(stack.last).toBeNull();
    expect(stack.size).toBe(0);
  });

  test("push method should add to the top of the stack", () => {
    expect(stack.first).toBeNull();
    expect(stack.last).toBeNull();
    expect(stack.size).toBe(0);

    stack.push(1);
    expect(stack.first.value).toBe(1);
    expect(stack.last.value).toBe(1);

    for (let i of [2, 3, 4, 5, 6, 7, 8, 9, 10]) 
      stack.push(i);

    expect(stack.first.value).toBe(10);
    expect(stack.last.value).toBe(1);
    expect(stack.size).toBe(10);
  });

  test("pop method should remove item from the top and return it", () => {
    [1, 2, 3].forEach((i) => stack.push(i));

    expect(stack.size).toBe(3);

    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeNull();

    expect(stack.first).toBeNull();
    expect(stack.last).toBeNull();
    expect(stack.size).toBe(0);
  });
});