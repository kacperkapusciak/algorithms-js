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
}

let list = new SinglyLinkedList();

list.push("Hi");
list.push("it's");
list.push("me!");

list.unshift("Hello");
list.print();

console.log(list.get(1).value);
list.set(1, "Hiiiiiiiiiii");
console.log(list.get(1).value);
