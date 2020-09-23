/* 
  In order to maintain an O(1) enqueue time complexity like .push with an array
  We add a tail to our linked list so we can go directly to the last node
*/

// Thur
// queueUsingTwoStacks
// create enqueue and dequeue methods on a new queue class that uses ONLY 2 stacks as storage but simulates a FIFO pattern
// sumOfHalvesEqual
// create a method on the array Queue class that returns whether or not the sum of the first half of the queue is equal to the sum of the second half
// DO NOT manually index the queue items, only use the provided queue methods, use no additional arrays or objects for storage
// restore the queue to it's original state before returning
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SLQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Time: O(1) constant
  // Space: O(1)
  isEmpty() {
    return this.head === null;
  }

  // Time: O(1) constant
  // Space: O(1)
  enqueue(val) {
    const newTail = new Node(val);

    if (this.isEmpty()) {
      this.head = newTail;
      this.tail = newTail;
    } else {
      this.tail.next = newTail;
      this.tail = newTail;
    }
    // pre-increment so the new size is returned otherwise old size is returned
    return ++this.size;
  }

  // Time: O(1) constant
  // Space: O(1)
  dequeue() {
    // remove head
    if (!this.head) {
      return null;
    }

    const dequeued = this.head;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    }

    this.size--;
    return dequeued.data;
  }

  // Time: O(1) constant
  // Space: O(1)
  front() {
    return this.head ? this.head.data : null;
  }

  // Time: O(n) linear
  // Space: O(1)
  contains(val) {
    let runner = this.head;

    while (runner) {
      if (runner.val === val) return true;
      runner = runner.next;
    }
    return false;
  }

  // Time: O(n) linear
  // Space: O(n)
  print() {
    let runner = this.head;
    let vals = "";

    while (runner) {
      vals += `${runner.data}${runner.next ? ", " : ""}`;
      runner = runner.next;
    }
    console.log(vals);
    return vals;
  }

  // Time: O(n) linear since enqueue is O(1), n = vals.length
  // Space: O(1)
  seed(vals) {
    vals.forEach((val) => this.enqueue(val));
  }
}

// Thur
// queueUsingTwoStacks
// create enqueue and dequeue methods on a new queue class that uses ONLY 2 stacks as storage but simulates a FIFO pattern
// sumOfHalvesEqual
// create a method on the array Queue class that returns whether or not the sum of the first half of the queue is equal to the sum of the second half
// DO NOT manually index the queue items, only use the provided queue methods, use no additional arrays or objects for storage
// restore the queue to it's original state before returning
