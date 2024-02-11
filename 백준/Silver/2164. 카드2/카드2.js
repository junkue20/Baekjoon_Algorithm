// 제출 시 readFileSync파라미터는 ./dev/stdin 로 수정 필요.
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString();

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const new_Node = new Node(val);

    if (!this.head) this.head = new_Node;
    else {
      this.tail.next = new_Node;
      new_Node.prev = this.tail;
    }

    this.tail = new_Node;
    this.length++;

    return new_Node;
  }

  getHead() {
    return this.head.val;
  }

  removeHead() {
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
  }

  getLength() {
    return this.length;
  }
}

const cards = new LinkedList();

for (let i = 1; i <= input; i++) {
  cards.push(i);
}

while (cards.getLength() !== 1) {
  cards.removeHead();
  cards.push(cards.getHead());
  cards.removeHead();
}

console.log(cards.getHead());
