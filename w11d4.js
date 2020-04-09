/* 
  Requirements:
  w1d1
    1. SList: Add Back
    2. seedFromArr: SList: Convert Array to SList
    3. Bonus: addBack recursive
  w1d2
    1. List: Add Front
      - add a new node to the front of the list
    2. List: Remove Front
      - remove only the first node from the list
      - bonus: return the removed val, or null if nothing was removed
    3. Bonus:
      - get middle node's data
  w1d3
    1. List: Contains (with & without recursion)
      - check if the list contains a value
    2. SList: Remove Back
      - remove the last node from the list
      - bonus: return the removed val, or null if nothing was removed
    3. Bonus:
      - SList: Split on Value
      - splitOnVal(5) for the list (1=>3=>5=>2=>4) will change list to (1=>3), and the return value will be a new list containing (5=>2=>4)
  w1d4
    1. SList: Move Min to Front
    2. SList: Remove Val
        - remove the node with the specified value, return the removed val, or null if nothing was removed
    3. Bonus: 
      - displayPeople: in a linked list containing person objects, write a method to print a comma separated string of all the people's firstName
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

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

    removeFront() {
        if (!this.head) {
            return null;
        }

        const headData = this.head.data;
        this.head = this.head.next;
        return headData;
    }

    insertAtBackRecursive(data, runner = this.head) {
        if (this.isEmpty()) {
            this.head = new Node(data);
            return this;
        }

        if (runner.next === null) {
            runner.next = new Node(data);
            return this;
        }

        return this.insertAtBackRecursive(data, runner.next);
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

    // extra looping can be avoided if we kept track of a length property on our list
    // updating the length as nodes are added / removed
    // can also have two runners, one that goes next.next and the slower one going just .next
    // so when the faster one reaches end, the slower one is half way
    getMiddleData() {
        let runner = this.head;
        let len = 0;

        while (runner) {
            len++;
            runner = runner.next;
        }

        // even length, no middle
        if (len % 2 === 0) {
            return null;
        }

        runner = this.head;
        let midPoint = Math.floor(len / 2);
        let idx = 0;

        while (idx !== midPoint) {
            idx++;
            runner = runner.next;
        }
        return runner.data;
    }

    removeBack() {
        let removedData = null;

        if (this.head !== null) {
            if (this.head.next === null) {
                // head only node
                removedData = this.head.data;
                this.head = null; // remove it from list
            } else {
                let runner = this.head;
                // right of && will only be checked if left is true
                while (runner.next && runner.next.next) {
                    runner = runner.next;
                }

                // after while loop finishes, runner is now at 2nd to last node
                removedData = runner.next.data;
                runner.next = null; // remove it from list
            }
        }
        return removedData;
    }

    contains(searchData) {
        let runner = this.head;

        // if head is null, runner is null, loop won't run
        while (runner) {
            if (runner.data === searchData) {
                return true;
            }
            runner = runner.next;
        }
        return false;
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

    // splitOnVal(5) for the list (1=>3=>5=>2=>4) will change list to (1=>3), and the return value will be a new list containing (5=>2=>4)

    splitOnVal(val) {
        const newList = new SList();

        if (this.isEmpty()) {
            return newList;
        }

        if (this.head.data === val) {
            newList.head = this.head;
            this.head = null;
            return newList;
        }

        let runner = this.head;

        while (runner.next) {
            if (runner.next.data === val) {
                newList.head = runner.next;
                runner.next = null;
                return newList;
            }
            runner = runner.next;
        }

        return newList;
    }

    /*
    w1d4
    1. SList: Move Min to Front
    2. SList: Remove Val
        - remove the node with the specified value, return the removed val, or null if nothing was removed
    3. Bonus: 
        - displayPeople: in a linked list containing person objects, write a method to print a comma separated string of all the people's firstName
    */

    // *** IF there are multiple mins, move the last one found
    moveMinToFront() {
        // Edge Case: SLL is empty or one node long
        if (this.isEmpty() || !this.head.next){return;}

        // ONE LOOP to find the node before LAST min value
        let prev = this.head;
        let minVal = this.head.data;
        let runner = this.head;
        while(runner.next !== null){    
            if(runner.next.data <= minVal){
                prev = runner;
                minVal = runner.next.data;
            }
            runner = runner.next;
        }

        // Remove the node with the LAST min value
        prev.next = prev.next.next;

        // Add a new node to the front with minValue
        this.insertAtFront(minVal);
    }

    // *** IF there are multiple copies, remove the first one found
    removeVal(val) {
        // Edge Case: SLL doesn't have the val
        if (!this.contains(val)){
            return null;
        }

        let runner = this.head;

        // Edge Case: The head has the val we want to remove
        if (runner.data === val){
            return this.removeFront();
        }

        while(runner.next !== null){            
            if(runner.next.data === val){
                let nodeFound = runner.next;
                runner.next = runner.next.next;
                return nodeFound.data;
            }
            runner = runner.next;
        }
    }

    displayPeople() {
        let runner = this.head;
        let vals = "";

        while (runner) {
            vals += `${runner.data["firstName"]}${runner.next ? ", " : ""}`;
            runner = runner.next;
        }
        console.log(vals);
        return vals;
    }
}

const myList = new LinkedList();
myList.seedFromArr([5, 2, 1, 6, 1]);
myList.removeVal(4);
myList.display();

const myListOfPersons = new LinkedList();
myListOfPersons.seedFromArr([
    { "firstName": "Alex" },
    { "firstName": "Kevin" },
    { "firstName": "Ronald" },
    { "firstName": "Mark" },
    { "firstName": "Roza" },
]
)
console.log("\nThis doesn't work:");
myListOfPersons.display();
console.log("But this does:");
myListOfPersons.displayPeople();