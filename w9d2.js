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
    newMethod(params) {
        // 'this' keyword will refer to the class instance
        // that the newMethod was called on
    }
    // return the min val from the BST
    min() {
        if (!this.root) {
            return null;
        }

        let current = this.root;

        while (current.left !== null) {
            current = current.left;
        }
        return current.val;
    }

    // create new node with newVal and add it in the appropriate place
    add(newVal) {
        const newNode = new BSTNode(newVal);

        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;

        while (true) {
            if (newVal <= current.val) {
                if (current.left === null) {
                    current.left = newNode;
                    return;
                } else {
                    current = current.left;
                }
            }
            // newVal is greater than current.val
            else {
                if (current.right === null) {
                    current.right = newNode;
                    return;
                } else {
                    current = current.right;
                }
            }
        }
    }

    // given val, return bool where true=searchVal in BST, else false
    contains(searchVal) {
        // if root is null, return false because there are no nodes to check
        if (!this.root) {
            return false;
        }

        // start a runner
        let current = this.root;

        while (current.left !== null && current.right !== null) {
            if (searchVal == current.val){
                return true;
            }
            else if (searchVal < current.val) {
                current = current.left;
            }
            else {
                current = current.right;
            }
        }
        return false;
    }
        // while (true) {
            // if searchVal found at root, return true
            // if searchVal < current, look left
                // if (current.left === null) {
                //     return false;
                // } else {
                //     current = current.left;
                // }
            // if searchVal > current, look right
                // if (current.right === null) {
                //     return false;
                // } else {
                //     current = current.right;
                // }
}

const myBST = new BST();

myBST.add(10);
// adds 10 to root
//  -10-
myBST.add(5);
// adds 5 to left of 10
//  -5-10-
myBST.add(20);
// adds 20 to right of 10
//  -5-10-20-
myBST.add(15);
// adds 15 to left of 15
//  -5-10-20-
//        V
//    -15-20-
console.log(myBST);

console.log("--------------");
console.log("myBST.root:");
console.log(myBST.root);
console.log("myBST.root.right:");
console.log(myBST.root.right);


console.log("--------------");
console.log("myBST.contains(5):");
console.log(myBST.contains(5));
console.log("myBST.contains(10):");
console.log(myBST.contains(10));
console.log("myBST.contains(12):");
console.log(myBST.contains(12));



  // test min
  // myBST.root = new BSTNode(3);
  // myBST.root.left = new BSTNode(2);
  // myBST.root.left.left = new BSTNode(1);

  // console.log(myBST.min());