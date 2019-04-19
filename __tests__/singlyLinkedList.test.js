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
    [1, 2, 3].forEach((i) => list.push(i));

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
    [1, 2, 3].forEach((i) => list.push(i));

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

  test("get method should return item of the given index", () => {
    [1, 2, 3].forEach((i) => list.push(i));

    expect(list.get(0).value).toBe(1);
    expect(list.get(1).value).toBe(2);
    expect(list.get(2).value).toBe(3);

    expect(list.get(-1)).toBeNull();
    expect(list.get(100)).toBeNull();
  });

  test("set method should set item on the given index", () => {
    [1, 2, 3].forEach((i) => list.push(i));

    list.set(1, "test");
    expect(list.get(1).value).toBe("test");
    expect(list.length).toBe(3);
  });

  test("insert method should insert item between nodes", () => {
    list.insert(0, 0);
    expect(list.get(0).value).toBe(0);

    [1, 2, 3].forEach((i) => list.push(i));

    list.insert(1, 11);
    expect(list.get(1).value).toBe(11);
    expect(list.length).toBe(5);

    expect(list.insert(-1)).toBeFalsy();
    expect(list.insert(1000)).toBeFalsy();
  });

  test("remove method should remove and return item of given index", () => {
    [0, 1, 2, 3, 4, 5].forEach((i) => list.push(i));

    expect(list.remove(3).value).toBe(3);
    expect(list.length).toBe(5);
    expect(list.remove(-1)).toBeUndefined();
    expect(list.remove(6)).toBeUndefined();

    expect(list.remove(0).value).toBe(0);
    expect(list.remove(3).value).toBe(5);
  });

  test("reverse method should reverse the list", () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    arr.forEach((el) => list.push(el));

    list.reverse();
    arr.reverse(); //build in array reverse method

    arr.forEach((item, index) => {
      expect(list.get(index).value).toBe(item);
    });
  });
});
