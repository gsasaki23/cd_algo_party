class LinkedList {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null;
    }

    insertAtBack(data) {
        const newNode = new Node(data);

        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            let runner = this.head;

            while (runner.next !== null) {
                runner = runner.next;
            }

            runner.next = newNode;
        }
        return this;
    }

    insertAtFront(data) {
        const newHead = new Node(data);
        newHead.next = this.head;
        this.head = newHead;

        return this;
    }

    display() {
        let runner = this.head;
        let vals = "";

        while (runner) {
            vals += `${runner.data}${runner.next ? ", " : ""}`;
            runner = runner.next;
        }
        console.log(vals);
        return vals;
    }

    seedFromArr(arr) {
        for (const item of arr) {
            this.insertAtBack(item);
        }
    }

    containsRecursive(searchData, runner = this.head) {
        if (this.isEmpty() || runner === null) {
            return false;
        }

        if (runner.data == searchData) {
            return true;
        }

        return this.containsRecursive(searchData, runner.next);
    }

    removeVal(val) {
        if (this.isEmpty()) {
            return false;
        }

        if (this.head.data === val) {
            this.head = this.head.next;
            return true;
        }

        let runner = this.head.next;

        while (runner.next && runner.next.data !== val) {
            runner = runner.next;
        }

        if (runner.next && runner.next.data === val) {
            runner.next = runner.next.next;
            return true;
        }

        return false;
    }

    concat(another) {
        if (another.isEmpty()) { return; }
        if (this.isEmpty()) {
            this.head = another.head;
        }
        let runner = this.head;
        while (runner.next !== null) {
            runner = runner.next;
        }
        runner.next = another.head;
        return;
    }

    removeNegatives() {
        if (this.isEmpty()) {
            return this;
        }
        let runner = this.head;

        // if there is only 1 node AND that node is neg
        if (this.head.next === null && this.head.data < 0) {
            this.head = null;
        }

        while (runner.next != null) {
            if (runner.next.data < 0) {
                runner.next = runner.next.next;
            }
            else {
                runner = runner.next;
            }
        }
        return this;
    }

    recursiveMax(runner = this.head, max = -Infinity) {
        // Base Case: No more nodes to check
        if (runner === null) {
            if (max === -Infinity) {
                return null;
            }
            return max;
        }
        // compare runner.data against max
        // if runner.data is greater, overwrite max
        if (runner.data > max) {
            max = runner.data;
        }

        // recursive call with runner.next
        return this.recursiveMax(runner.next, max);
    }

//  w3d3
//  - removeDupesSorted: Remove duplicates from a sorted linked list (in place)
    removeDupesSorted(){
        let runner = this.head;
        while (runner != null && runner.next != null) {
            if (runner.data == runner.next.data) {runner.next = runner.next.next;} 
            else {runner = runner.next;}
        }
        return this;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

const myList = new LinkedList();
myList.seedFromArr([4,4,2,2,2,0]);
myList.removeDupesSorted();
myList.display();

/* 
    w3d3
    - create the necessary classes to design a double linked list
        - a linked list that allows you to traverse forwards AND backwards, allowing you to start at the front or the back
    
*/
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
}