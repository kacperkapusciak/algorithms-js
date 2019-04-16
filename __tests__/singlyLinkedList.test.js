const classes = require("../src/singlyLinkedList");
const SinglyLinkedList = classes.SinglyLinkedList;
const Node = classes.Node;

describe("Singly linked list", () => {
  it("should create Node with given value", () => {
    const newNode = new Node("value");
    expect(newNode.value).toBe("value");
    expect(newNode.next).toBeNull();
  });

  let list;
  beforeEach(() => {
    list = new SinglyLinkedList();
  });

  it("should create empty list", () => {
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.length).toBe(0);
  });

  test("push method should add to the end of the list", () => {
    list.push(1);
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(1);
    for (let i of [2, 3, 4, 5, 6, 7, 8, 9, 10]) 
      list.push(i);

    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(10);
    expect(list.length).toBe(10);
  });

  test("pop method should remove item from the end", () => {
    for (let i of [1, 2, 3]) 
      list.push(i);

    expect(list.length).toBe(3);

    expect(list.pop().value).toBe(3);
    expect(list.pop().value).toBe(2);
    expect(list.pop().value).toBe(1);
    expect(list.pop()).toBeUndefined();

    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.length).toBe(0);
  });

  test("shift method should remove item from the beginning", () => {
    for (let i of [1, 2, 3]) 
      list.push(i);

    expect(list.length).toBe(3);

    expect(list.shift().value).toBe(1);
    expect(list.shift().value).toBe(2);
    expect(list.shift().value).toBe(3);
    expect(list.shift()).toBeUndefined();

    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.length).toBe(0);
  });

  test("unshift method should add item at the beginning", () => {
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.length).toBe(0);

    list.unshift(1);
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(1);

    for (let i of [2, 3, 4, 5, 6, 7, 8, 9, 10]) 
    list.unshift(i);

  expect(list.head.value).toBe(10);
  expect(list.tail.value).toBe(1);
  expect(list.length).toBe(10);
  });

  test.todo("test get method");
  test.todo("test set method");
  test.todo("test insert method");
  test.todo("test remove method");
  test.todo("test reverse method");
});
