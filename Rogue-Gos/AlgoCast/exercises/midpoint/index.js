// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

// const l = new LinkedList();
// l.insertLast("a");
// l.insertLast("b");
// l.insertLast("c");
// l.insertLast("d");
// l.insertLast("e");
// l.insertLast("f");
// l.insertLast("g");
// l.insertLast("h");
// l.insertLast("i");
// l.insertLast("j");
// l.insertLast("k");

//                               t           h
// [a] - [b] - [c] - [d] - [e] - [f] - [h] - [i] - [j] -
function midpoint(list) {
  let totoroise = list.getFirst();
  let hare = list.getFirst();

  while (hare.next && hare.next.next) {
    totoroise = totoroise.next;
    hare = hare.next.next;
    console.log("tortoroise is now: " + totoroise);
    console.log("hare is now: " + hare);
  }
  return totoroise;
}

// console.log(midpoint(l));

module.exports = midpoint;
