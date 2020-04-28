/* 
  w3d2
    - create the BST class and the BSTNode class
      - a BST has a root instead of a head (because it's a tree)
      - a BSTNode has a left, right, and val or data instead of next
    - BST Max return the max with and without recursion
    - BST Min return the min with and without recursion
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
    constructor(data) {
        this.data = data;
        // instead of next, each node can point to 2 other nodes or null
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null; // not head because it's a tree!
    }
    recursiveMax(runner = this.root) {
        // if this.root is null
        if(runner === null) // !runner
        {
            // there is no max?
            return null;
        }
        // base case: no .right
        if(runner.right === null) // !runner.right
        {
            // current node is the max!
            return runner.data
        }
        // if there is a .right, recursion!
        return this.recursiveMax(runner.right);
    }
    max() {
        let runner = this.root;
        if (!runner){
            return null;
        }
        // while there is a .right
        while(runner.right) {
            runner = runner.right;
        }
        // if we get here, assume there are no more .right
        return runner.data;
    }
    recursiveMin(runner = this.root) {
        // if this.root is null
        if(runner === null) // !runner
        {
            // there is no min?
            return null;
        }
        // base case: no .left
        if(runner.left === null) // !runner.left
        {
            // current node is the min!
            return runner.data
        }
        // if there is a .left, recursion!
        return this.recursiveMax(runner.left);
    }
    min() {
        let runner = this.root;
        if (!runner){
            return null;
        }
        // while there is a .left
        while(runner.left) {
            runner = runner.left;
        }
        // if we get here, assume there are no more .left
        return runner.data;
    }
}