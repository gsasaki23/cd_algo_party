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

    // check if BST cointains value and return true or false
    containsRecursive(searchVal, current = this.root) {
        if (current === null) {
            return false;
        }

        if (current.val === searchVal) {
            return true;
        }

        // no need to check (current.left !== null), next function call will check that for us
        if (current.left !== null && searchVal < current.val) {
            return this.containsRecursive(searchVal, current.left);
        }

        // no need to check (current.right !== null), next function call will check that for us
        else if (current.right !== null && searchVal > current.val) {
            return this.containsRecursive(searchVal, current.right);
        }

        // no need if we remove the null checks
        return false;
    }
}


const myBST = new BST();

myBST.add(10);
myBST.add(5);
myBST.add(20);
myBST.add(15);
//  -5-10-20-
//        V
//    -15-20-
console.log(myBST);

console.log("--------------");
console.log("myBST.containsRecursive(5):");
console.log(myBST.containsRecursive(5));
console.log("myBST.containsRecursive(10):");
console.log(myBST.containsRecursive(10));
console.log("myBST.containsRecursive(12):");
console.log(myBST.containsRecursive(12));