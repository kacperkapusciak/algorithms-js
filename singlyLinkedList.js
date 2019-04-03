class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return true;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = this.head;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length == 0) this.head = this.tail = null;

    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    this.length--;

    if (this.length == 0) this.tail = null;
    return temp;
  }

  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return true;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    for (let counter = 0; index !== counter; counter++) {
      current = current.next;
    }
    return current;
  }
  set(index, value) {
    let found = this.get(index);
    if (found) {
      found.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(value);
    if (index === 0) return this.unshift(value);

    let newNode = new Node(value);
    let prev = this.get(index - 1);
    // let temp = prev.next;
    // prev.next = newNode;
    // newNode.next = temp;
    [prev.next, newNode.next] = [newNode, prev.next]; //tricky but shorter and it works!
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    [this.head, this.tail] = [this.tail, this.head];
    let prev = null;
    let node = this.tail;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next; 
    }
  }
}

let list = new SinglyLinkedList();

list.push("Hi");
list.push("it's");
list.push("me!");
list.print();
console.log("////////////////")
list.reverse();
list.print();
