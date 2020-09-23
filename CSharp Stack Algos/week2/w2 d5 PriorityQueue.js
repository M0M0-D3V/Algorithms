// Fri
// [] priorityQueue (create enqueue and dequeue methods)
// [] design a new PriorityQueue class where the queue maintains an ascending order when items are added based on queue item's provided priority integer value. A priority value of 1 is most important which means it should be at the front of the queue, the first to be dequeued.
// sListPriorityQueue
class QElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor(items = []) {
    this.items = items;
  }
  // got the parameters right here yayy
  enqueue(element, priority) {
    // can use either of these item objects as our new item..
    // const item = { element: element, priority: priority};
    const qItem = new QElement(element, priority);
    let queued = false;

    // if (this.items.length === 0) {
    //   queued = true;
    //   this.items.push(qItem);
    // }
    // at least we go this loop right ! lol
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > qItem.priority) {
        queued = true;
        this.items.splice(i, 0, qItem);
        return this.items.length;
      }
    }
    if (!queued) {
      this.items.push(qItem);
    }
  }

  dequeue() {
    return this.items.shift();
  }

  display() {
    const str = this.items.join(", ");
    for (const elemn of this.items) {
      if (str !== "") {
        str += ", ";
      }
      str += JSON.stringify(elem.element);
    }
    console.log(str);
    return str;
  }
}

const q = new PriorityQueue();
q.enqueue({ name: "Aric" }, 4);
q.enqueue({ name: "DJ" }, 6);
q.enqueue({ name: "Patrick" }, 2);
q.enqueue({ name: "The Instructional One" }, 1);
// logic = if already array1,2,3,4. if we need to put 3 in middle <then className=""></then>

//     var arr = [ 'A', 'B', 'D', 'E' ];
// arr.insert(2, 'C');

// => arr == [ 'A', 'B', 'C', 'D', 'E' ]
// whep! let's see how we did! ;
