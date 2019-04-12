class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  pop() {
    if (this.head === null) return undefined;
    const temp = this.tail;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp.value;
  }

  shift() {
    if (this.head === null) return undefined;
    const temp = this.head;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp.value;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current;
    if (index <= this.length / 2) {
      current = this.head;
      for (let counter = 0; counter !== index; counter++)
        current = current.next;
    } else {
      current = this.tail;
      for (let counter = this.length - 1; counter !== index; counter--)
        current = current.prev;
    }
    return current;
  }

  set(index, value) {
    const found = this.get(index);
    if (found) {
      found.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const newNode = new Node(value);
    const before = this.get(index - 1);
    const after = before.next;

    before.next = newNode;
    newNode.prev = before;
    newNode.next = after;
    after.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removed = this.get(index);
    const before = removed.prev;
    const after = removed.next;
    
    before.next = after;
    after.prev = before;
    removed.next = removed.prev = null;
    this.length--;
    return removed;
  }

}

let list = new DoublyLinkedList();
list.push(10)
list.push(20);
list.push(30);
list.print();
console.log("---");
console.log(list.length);
console.log(list.remove(1).value);
console.log("---");
list.print();
