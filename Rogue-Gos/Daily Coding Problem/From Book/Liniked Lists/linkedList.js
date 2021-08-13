/*
create Singly Linked List Class and Node Class

*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    // determine if empty
    isEmpty() {
        return this.head == null
    }
    // add to back
    addToBack(data) {
        let newNode = new Node(data);
        if(this.isEmpty()) {
            this.head = newNode;
            return this
        }
        let runner = this.head;
        while(runner.next != null) {
            runner = runner.next;
        }        
        runner.next = newNode;
        return this
    }
    // display list
    displayList() {
        if(this.isEmpty()) {
            return null
        }
        let runner = this.head;
        while(runner.next != null) {
            console.log(runner)
            runner = runner.next;
        }
    }
    // reverse
}

let myList = new LinkedList();
myList.addToBack(1).addToBack(2).addToBack(3).displayList();
myList.addToBack(3);
myList.addToBack(6);
myList.addToBack(2).displayList();