/* 
  - A Doubly Linked List is a singly linked list with the added functionality of being able to traverse in both directions.
  - Since you can traverse forwards or backwards, that means you should be able to start at the head or tail (end). After creating the necessary classes, then build the following methods:
  Week3
    4. Thur
      - Create the necessary classes then build the below methods:
        - insertAtBack
          - given some new data, add it to the back of the DList
        - insertAtFront
        - removeMiddleNode
  5. Fri
    - insertAfter
      - add new val after a target val
    - insertBefore
      - add new val before a target val
*/

class DLLNode {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null;
  }

  // Time: O(1) constant
  // Space: O(1)
  insertAtFront(data) {
    const newNode = new DLLNode(data);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    return this;
  }

  // Time: O(1) constant, on a single linked list with no tail pointer same operation is O(n)
  // Space: O(1)
  insertAtBack(data) {
    const newTail = new DLLNode(data);

    if (!this.head) {
      // if no head set the newTail to be both the head and the tail
      this.head = this.tail = newTail;
    } else {
      this.tail.next = newTail;
      newTail.prev = this.tail;

      this.tail = newTail;
    }
    return this;
  }

  // Time: O(n / 2) -> O(n) linear, n = list length
  // Space: O(1) constant
  removeMiddleNode() {
    let forwardRunner = this.head;
    let backwardsRunner = this.tail;

    while (forwardRunner && backwardsRunner) {
      // move the runners first so if the head is only node
      // it won't be compared to itself and considered the middle
      forwardRunner = forwardRunner.next;
      backwardsRunner = backwardsRunner.prev;

      if (forwardRunner === backwardsRunner) {
        let midNode = forwardRunner;

        midNode.prev.next = midNode.next;
        midNode.next.prev = midNode.prev;
        return midNode.data;
      }
      if (forwardRunner.next === backwardsRunner) {
        /**
         * happens if even lengthed list, there is no middle
         * so return to exit early before getting to the ends of list
         * this will return undefined which is what .pop() returns if
         * called on an empty array
         */
        return null;
      }
    }
  }

  // 5. Fri
  // - insertAfter
  insertAfter(target, value) {
    //   - add new val after a target val
    const newNode = new DLLNode(value);
    if (this.isEmpty()) {
      return null;
    }

    let runner = this.head;
    while (runner) {
      if (runner.data == target) {
        let theNextNode = runner.next;
        runner.next = newNode;
        newNode.prev = runner;
        newNode.next = theNextNode;
        theNextNode.prev = newNode;
        return;
      }
    }
    // while (runner || runner.data != target) {
    //   // if (runner.data == target) {
    //   runner = runner.next;
    // }
    // if (runner == null) {
    //   return null;
    // }
    // if () {
    //   //
    // }
  }

  // - insertBefore
  insertBefore(target, value) {
    //   - add new val before a target val
    const newNode = new DLLNode(value);
    if (this.isEmpty()) {
      return null;
    }
    let runner = this.tail;
    while (runner) {
      if (runner.data == target) {
        let thePrevNode = runner.prev;
        runner.prev = newNode;
        newNode.next = runner;
        newNode.prev = thePrevNode;
        thePrevNode.next = newNode;
        return;
      }
    }
  }
}
