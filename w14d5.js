/* 
  w4d2
    - create the BST class and the BSTNode class
      - a BST has a root instead of a head (because it's a tree)
      - a BSTNode has a left, right, and val or data instead of next
    - BST Max return the max with and without recursion
    - BST Min return the min with and without recursion
  w4d3
    - BST Contains (with & without recursion)
    - min of right sub tree (how can non-recursive min & max be adapted to work for this?)
    - max of left sub tree
  w4d4
    - BST Add
      - add a new value to the appropriate place in the tree, if the new value is equal to an existing value, add it to the left
    - BST Range
      - (Range is max minus min. What if tree is empty?)
  w4d5
    - print all vals as one space separated string
    - BST Size (recursive: total number of nodes)
*/

/* 
                  50
                /   \
              40    60
            /  \    / \
          30   45 55  70
        /   \        /
      20    35     65
        \
        25
*/

class BSTNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    // bst.min(myBst.root.right) would let us get the min value of the right sub-tree
    min(current = this.root) {
        if (current === null) {
            return null;
        }

        while (current.left) {
            current = current.left;
        }
        return current.val;
    }

    minRecursive(current = this.root) {
        if (current === null) {
            return null;
        }

        if (current.left === null) {
            return current.val;
        }

        return this.minRecursive(current.left);
    }

    // bst.max(myBst.root.left) would let us get the max vlaue of the right sub-tree
    max(current = this.root) {
        if (current === null) {
            return null;
        }

        while (current.right) {
            current = current.right;
        }
        return current.val;
    }

    maxRecursive(current = this.root) {
        if (current === null) {
            return null;
        }

        if (current.right === null) {
            return current.val;
        }

        return this.minRecursive(current.right);
    }

    contains(searchVal) {
        let current = this.root;

        while (current) {
            if (current.val === searchVal) {
                return true;
            }

            if (searchVal < current.val) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    containsRecursive(searchVal, current = this.root) {
        if (current === null) {
            return false;
        }

        if (current.val === searchVal) {
            return true;
        }

        if (searchVal < current.val) {
            return this.containsRecursive(searchVal, current.left);
        }

        if (searchVal > current.val) {
            return this.containsRecursive(searchVal, current.right);
        }
    }

    range(startNode = this.root) {
        if (!startNode) {
            return null;
        }
        return this.max(startNode) - this.min(startNode);
    }

    add(newVal) {
        const node = new BSTNode(newVal);

        if (this.isEmpty()) {
            this.root = node;
        } else {
            let current = this.root;

            while (true) {
                if (newVal <= current.val) {
                    if (!current.left) {
                        current.left = node;
                        break;
                    } else {
                        current = current.left;
                    }
                } else {
                    // newVal is greater than current.val
                    if (!current.right) {
                        current.right = node;
                        break;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
        return this;
    }

    // w4d5
    // - print all vals as one space separated string
    // - BST Size (recursive: total number of nodes)
    
    print(curr = this.root, answer = "") {
        // Edge Case: empty BST
        if (!curr){ return answer; }

        // Add this node to the answer string
        answer += curr.val.toString() + " ";

        // If it has a left, we should add that node and beyond
        if (curr.left) { answer = this.print(curr.left,answer); }

        // If it has a right, we should add that node and beyond
        if (curr.right) { answer = this.print(curr.right,answer); }

        return answer;
    }

    size(curr = this.root, totalSize = 0) {
        // Edge Case: empty BST
        if (!curr){ return totalSize; }

        // Count this node in the census
        totalSize++;

        // If it has a left, we should get the size of that node and beyond
        if (curr.left) { totalSize = this.size(curr.left,totalSize); }

        // If it has a right, we should get the size of that node and beyond
        if (curr.right) { totalSize = this.size(curr.right,totalSize); }

        return totalSize;
    }

    // \\\\\ HI ZOOM /////

}

let test = new BST();
test.add(50);
test.add(40);
test.add(60);
test.add(30);
test.add(45);
test.add(55);
test.add(70);
test.add(20);
test.add(35);
test.add(65);
test.add(25);

/* 
                  50
                /   \
              40    60
            /  \    / \
          30   45 55  70
        /   \        /
      20    35     65
        \
        25
*/

console.log(test.size());
console.log(test.print());