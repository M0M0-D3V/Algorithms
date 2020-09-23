/* 
  1. Mon
    1. isEmpty
    2. min (with & without recursion)
    3. max (with & without recursion)

  2. Tue
    1. Contains (with & without recursion)
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Week 4 - Tuesday

  // contains() {}

  // Week 4 - Monday

  isEmpty() {
    if (this.root == null) {
      return true;
    }
  }

  min() {
    let runner = this.root;
    while (runner.left) {
      runner = runner.left;
    }
    return runner.data;
  }

  minRecursive(runner = this.root) {
    if (this.isEmpty()) {
      return null;
    }
    if (runner.left == null) {
      return runner.data;
    }
    return minRecursive(runner.left);
  }

  max() {
    let runner = this.root;
    while (runner.right) {
      runner = runner.right;
    }
    return runner.data;
  }

  maxRecursive() {
    if (runner.right == null) {
      return runner.data;
    }
    return maxRecursive(runner.right);
  }

  contains(data) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  find(data) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  insert(data) {
    var newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (data === current.data) return undefined;
      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  containsRecursive(data, current = this.root) {
    console.log(data);
    if (this.root === null || current == null) return false;
    if (current.data == data) {
      return true;
    }
    console.log('does it even reach here?');

    if (data < current.data) {
      return this.containsRecursive(data, current.left);
    } else if (data > current.data) {
      return this.containsRecursive(data, current.right);
    }
    return false;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

console.log(tree.containsRecursive(101));

/*
                    root
                <-- 25 -->
            /            \
            15             50
        /    \         /    \
        10     22      35     70
      /   \   /  \      /  \   /  \
     4    12  18  24  31  44 66  90
*/
