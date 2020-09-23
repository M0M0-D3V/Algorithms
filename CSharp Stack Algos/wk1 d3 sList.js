/* 
Week 1
  1. Mon
    - isEmpty
    - insertAtBack
    - seedFromArr
      - given an array, insert each item of the array to the back of this linked list
  2. Tue
    1. insertAtFront
      - add a new node to the front of the list
    2. removeHead
      - remove only the first node from the list and return the data of the removed node or null
    3. Bonus: return the average of the list
  3. Wed
    1. contains - with & without recursion
      - check if the list contains a value
    2. removeBack
      - remove the last node from the list and return it's data or null
    3. Bonus: getMiddleData: get data of middle node
*/

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class SList {
    constructor() {
      this.head = null;
    }
  
    // Time: O(1) constant
    // Space: O(1)
    isEmpty() {
      return this.head === null;
    }
  
    // Time: O(n) linear, n = length of list
    // Space: O(1)
    insertAtBack(val) {
      const newNode = new Node(val);
  
      if (this.isEmpty()) {
        this.head = newNode;
        return;
      }
  
      let runner = this.head;
  
      while (runner.next !== null) {
        runner = runner.next;
      }
      runner.next = newNode;
    }
  
    // Time: O(n * m) n = list length, m = arr.length
    // Space: O(1) constant
    seedFromArr(arr) {
      for (const elem of arr) {
        this.insertAtBack(elem);
      }
    }
  
    // Time: O(n) linear, n = length of list
    // Space: O(n) due to the string growing based on list size
    display() {
      let str = "";
  
      let runner = this.head;
  
      while (runner !== null) {
        str += runner.data;
  
        // add ", " if not last node
        if (runner.next !== null) {
          str += ", ";
        }
        runner = runner.next;
      }
      console.log(str);
      return str;
    }
  
    // Time: O(1) constant
    // Space: O(1)
    insertAtFront(data) {
      const newHead = new Node(data);
      newHead.next = this.head;
      this.head = newHead;
      return this;
    }
  
    // Time: O(1) constant
    // Space: O(1)
    removeHead() {
      if (this.isEmpty()) {
        return null;
      }
  
      this.head = this.head.next;
      return this;
    }
  
    // Time: O(n) linear, n = list length
    // Space: O(1)
    average() {
      if (this.isEmpty()) {
        return 0;
      }
  
      let count = 0;
      let sum = 0;
      let runner = this.head;
  
      // while runner is truthy, will cancel if runner is null or empty string or the int 0, anything that is falsy
      while (runner) {
        count++;
        sum += runner.data;
        runner = runner.next;
      }
      return sum / count;
    }
    // 1. contains - with & without recursion
    //     - check if the list contains a value
    contains(val) {
      //the isEmpty check is optional
      if (this.isEmpty()){
        return false;
      }
      let runner = this.head;
      while (runner != null) {
        if (runner.data === val) {
          return true;
        }
        else {
          runner = runner.next;
        }
      } 
      
    }
    
      //   2. removeBack
      //     - remove the last node from the list and return it's data or null
    removeBack(data) {
      if (this.isEmpty()){
        return null;
      }
      //.remove(position, #)
      //go to second to the last position
      let runner = this.head;
      while(runner) {
        if(runner.next.next ==null){
          let rip = runner.data;
          runner.data = null;
        }
          return rip;
      }
      // send to abyss = null by saving it to a variable first
      // return data or null
        
    }
    
  }


  //   3. Bonus: getMiddleData: get data of middle node
  
  const linkedList = new SList();
  linkedList.seedFromArr([10, 15, 10]);
  linkedList.display();

// PYTHON BELOW! :)
  def removeFromBack(self):
  if self.head == None:
     print("The list is empty - unable to remove from the back")
     return ""
  
  if self.head.next == None:
      runner = self.head
      self.head = None
      return runner.data
  
  runner = self.head
  while runner.next.next != None:
      runner = runner.next
  lastNode = runner.next
  runner.next = None
  return lastNode.data 

  def addToFront(self, val):
  new_node = SLLNode(val)
  new_node.next = self.head
  self.head = new_node
  return self 

def addToBack(self, val):
  if self.head == None:
      self.head = SLLNode(val)
  else:
      runner = self.head
      while runner.next != None:
          runner = runner.next
      runner.next = SLLNode(val)
  return self 