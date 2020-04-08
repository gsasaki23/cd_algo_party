/* 
  Requirements:
​
  w1d3:
    1. List: Contains (with & without recursion)
      - check if the list contains a value
    2. SList: Remove Back
      - remove the last node from the list
      - bonus: return the removed val, or null if nothing was removed
​
    Bonus:
​
      - SList: Split on Value
      - splitOnVal(5) for the list (1=>3=>5=>2=>4) will change list to (1=>3), and the return value will be a new list containing (5=>2=>4)
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

    removeHead() {
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

// w1d3:
//     // 1. List: Contains (with & without recursion)
//       - check if the list contains a value
    contains(val){
        // edge case: if SLL is empty, assume it won't contain val
        if (this.isEmpty()){
            return false; 
        }

        let runner = this.head;
        // Loop through SLL until the end
        while (runner !== null){
            // if any one node has val, then the SLL contains val
            if (runner.data === val) {
                return true;
            }
            runner = runner.next;
        }
        // we got through the SLL without ever finding a match, so SLL doesn't contain val
        return false;
    }

    containsRecursive(val, runner = this.head){
        // base case 1 = end of the SLL (including this.head being null)
        if (runner === null){
            return false;
        }
        // base case 2 = found a match
        if (runner.data === val){
            return true;
        }
        // recursive case = NOT at the end, NOT a match
        // Look at the next node
        let nextNode = runner.next;
        return this.containsRecursive(val, nextNode);
    }

//     2. SList: Remove Back
//       - remove the last node from the list
//       - bonus: return the removed val, or null if nothing was removed
    removeBack(data) {
        // Edge Case: SLL is empty
        if (this.isEmpty()) {
            return null;
        }
        
        let runner = this.head;

        // Edge Case: SLL has one node only
        if (runner.next === null){
            // get a copy of that data to return later
            let answer = runner.data;
            // remove the one node
            this.head = null;
            // return the removed val
            return answer;
        }

        // (If the SLL is at least 2 nodes long) 
        // Take runner to the second to last node
        while (runner.next.next !== null) {
            runner = runner.next;
        }
        // get a copy of that data to return later
        let answer = runner.data;
        // remove the last node
        // (2nd > last > null) turns into (2nd > null)
        runner.next = null;
        // return removed val
        return answer;
    }

//     Bonus: Split on Value
    splitOnVal(val){
        // Make sure SLL contains val
        if (!this.contains(val)) return new LinkedList();

        // Find node right before val
        let runner = this.head;
        while(runner.next.data !== val){
            runner = runner.next;
        }

        // set temporary pointer = node that would start our answer SLL
        let pointer = runner.next;

        // for the first half, cut off the rest of the SLL
        runner.next = null;

        // make a new answer SLL
        let answer = new LinkedList();
        // point the head of that SLL to the second half
        answer.head = pointer;

        return answer;
    }
}

let SLL = new LinkedList();
SLL.insertAtBack(1);
SLL.insertAtBack(2);
SLL.insertAtBack(3);
SLL.insertAtBack(4);
SLL.insertAtBack(5);
// this.head = 1 > 2 > 3 > 4 > 5 > null

console.log(SLL.contains(2)); // expect true
console.log(SLL.containsRecursive(6)); // expect false

let newSLL = SLL.splitOnVal(3);
// this.head = 3 > 4 > 5 > null
console.log(newSLL.head.data) // expect 3
console.log(SLL.head.next.next) // expect null