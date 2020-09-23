// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
    return this.next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const newHead = Node(data);
    newHead.next = this.head;
    this.head = newHead;
    return this;
  }
}

module.exports = { Node, LinkedList };
