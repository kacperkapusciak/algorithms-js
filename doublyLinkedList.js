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
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    
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
}

let list = new DoublyLinkedList();
list.unshift(10);
list.unshift(20);
list.unshift(30);
list.push(40);
list.push(50);
list.insert(2, 2000);
list.print();
console.log("---");
console.log(list.length);
console.log(list.get(4).value);
