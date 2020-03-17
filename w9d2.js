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
    min() {
        // return the min val from the BST
    }
    add(newVal) {
        // create new node with newVal and add it in the appropriate place
    }
}

const myBST = new BST();
myBST.add(5);