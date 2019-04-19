const Queue = require("../src/queue");

describe("Queue", () => {

  let queue;
  beforeEach(() => {
    queue = new Queue();
  });

  it("should create empty queue", () => {
    expect(queue.first).toBeNull();
    expect(queue.last).toBeNull();
    expect(queue.size).toBe(0);
  });

  test("enqueue should add an item at the begining of the queue", () => {
    queue.enqueue(1);
    expect(queue.first.value).toBe(1);
    expect(queue.last.value).toBe(1);

    for (let i of [2, 3, 4, 5, 6, 7, 8, 9, 10]) 
      queue.enqueue(i);

    expect(queue.first.value).toBe(1);
    expect(queue.last.value).toBe(10);
    expect(queue.size).toBe(10);
  });

  test("dequeue should remove from the end and return the value", () => {
    [1, 2, 3].forEach((i) => queue.enqueue(i));

    expect(queue.size).toBe(3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBeNull();

    expect(queue.first).toBeNull();
    expect(queue.last).toBeNull();
    expect(queue.size).toBe(0);
  });
});
