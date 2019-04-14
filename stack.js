class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;
    return this.size;
  }

  pop() {
    if (!this.first) return null;
    const temp = this.first; 
    this.first = this.first.next;
    this.length--;

    if (this.size == 0) this.last = null;
    return temp;
  }

  print() {
    let current = this.first;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const stack = new Stack();
stack.push(123);
stack.push(234);
stack.push(345);
stack.print();
console.log("---")
console.log(stack.pop().value);
console.log(stack.pop().value);
console.log(stack.pop().value);
