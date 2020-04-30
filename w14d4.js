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

    bstContains(target){
        let runner = this.root;

        while(runner !== null){
            if(runner.val === target)
            {
                return true;
            } else if (target > runner.val) {
                runner = runner.right;
            }  else {
                runner = runner.left;
            }
        }
        return false;
    }

    minOfRightSubtree(){
        // Edge Case: Empty BST
        if(this.root === null){
            return null;
        }
        // Call min, pretending that the entire tree is only the right half (i.e. root is the right half)
        return this.min(this.root.right);
    }

    maxOfLeftSubtree(){
        // Edge Case: Empty BST
        if(this.root === null){
            return null;
        }
        // Call max, pretending that the entire tree is only the left half (i.e. root is the left half)
        return this.max(this.root.left);
    }

// w4d4
// - BST Add
//   - add a new value to the appropriate place in the tree, if the new value is equal to an existing value, add it to the left
// - BST Range
//   - (Range is max minus min. What if tree is empty?)

    add(val){
        let runner = this.root;
        while(runner){
            // Equal or Less
            if(val <= runner.val){
                if(runner.left === null){
                    runner.left = new BSTNode(val);
                    return this;
                }
                runner = runner.left;
            }
            // Greater
            else{
                if(runner.right === null){
                    runner.right = new BSTNode(val);
                    return this;
                }
                runner = runner.right;
            }
        }   
        // if tree is empty, make val the new root
        return this.root = new BSTNode(val);   
    }

    range(){
        if (!this.root){
            return 0;
        }
        return this.max() - this.min();
    }
    // return !this.root ? 0 : this.max() - this.min();
}
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