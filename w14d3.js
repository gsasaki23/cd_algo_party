// w4d3
// - BST Contains (with & without recursion)
// - min of right sub tree (how can non-recursive min & max be adapted to work for this?)
// - max of left sub tree

class BSTNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
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

// ~~~~~~~~~~~~~~~\\ HI ZOOM //~~~~~~~~~~~~~~~

    maxOfLeftSubtree(){
        // Edge Case: Empty BST
        if(this.root === null){
            return null;
        }
        // Call max, pretending that the entire tree is only the left half (i.e. root is the left half)
        return this.max(this.root.left);
    }

    insert(val){
        // Edge Case: Empty BST
        if(this.root === null){
            this.root = new BSTNode(val);
            return;
        }

        let runner = this.root;
        let quarantineSucks = true;
        while(quarantineSucks){
            if(runner.val === val)
            {
                // for now, we don't add if the list already contains val
                return;
            } 
            else if (runner.val < val) {
                if (runner.right === null){
                    runner.right = new BSTNode(val);
                    return;
                }
                runner = runner.right;
            }  
            else {
                if (runner.left === null){
                    runner.left = new BSTNode(val);
                    return;
                }
                runner = runner.left;
            }
        }
    }
}