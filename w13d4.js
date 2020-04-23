class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

// w3d4
// - DList: Prepend Value
//   - add new val before a target val
// - isNodeInLeftHalf: given a reference to a node, return whether it's in left half or not

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }


    prependVal(newVal, targetVal) {
        // Edge Case: DLL is empty (did we want a specific return?)
        if (!this.head) { return null; }

        let runner = this.head;

        // Edge case: if the target was the first node
        if (runner.data === target){
            // ex: adding 2 into 3
            let newNode = new Node(newVal);
            // Make new node with .data as 2
            newNode.next = runner;
            // Point 3.prev to 2
            runner.prev = newNode;
            // Point head to 2
            this.head = newNode;
            return this;
        }

        while (runner != null) {
            if (runner.data === targetVal) {
                // ex: adding 2 into 1,3
                // Make new node with .data as 2
                let newNode = new Node(newVal);
                // Point 2.next to 3, 2.prev to 1
                newNode.next = runner;
                newNode.prev = runner.prev;
                // Point 3.prev to 2
                runner.prev = newNode;
                // Point 1.next to 2
                newNode.prev.next = newNode;
                return this;
            }
            runner = runner.next;
        }
        // Edge Case: We got through entire list without finding target (did we want a specific return?)
        return null;
    }

    isNodeInLeftHalf(node) {
        let leftRunner = node, rightRunner = node;
        while (leftRunner && rightRunner){
            // if there are more RIGHT but not LEFT
            if (rightRunner.next && !leftRunner.prev) return true;
            // if there are more LEFT but not RIGHT
            else if (!rightRunner.next && leftRunner.prev) return false;
            // if there are neither LEFT or RIGHT = odd # nodes, and it was the middle
            else if (!rightRunner.next && !leftRunner.prev) return false;

            // if none of the above matched, there are more RIGHT and LEFT 
            rightRunner = rightRunner.next;
            leftRunner = leftRunner.next;
        }
        // if all else fails
        return false;

        // Neil's approach: make 2 runners, run it rightward and leftward, return whichever has more nodes
        /*
        let nodesToLeft = 0, nodesToRight = 0;
        let leftRunner = node, rightRunner = node;

        while (leftRunner) {
            nodesToLeft++;
            leftRunner = leftRunner.prev;
        }

        while (rightRunner) {
            nodesToRight++;
            rightRunner = rightRunner.next;
        }

        return nodesToLeft < nodesToRight;
        */
    }

}

let myList = new DoublyLinkedList();
// Manually made list with 1,3
let one = new Node(1);
let three = new Node(3);
myList.head = one;
one.next = three;
three.prev = one;
myList.tail = three;
// Test function we just wrote (expecting 1,2,3)
myList.prependVal(2, 3);
console.log(myList);