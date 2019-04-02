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
}

let list = new SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);

console.log(list.shift().value);
console.log(list.shift().value);
console.log(list.shift().value);
console.log(list.shift());
console.log(list);
