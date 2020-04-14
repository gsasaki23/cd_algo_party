/* 
w2d1
- A stack is a LIFO (Last in First Out) data structure
- create a class to represent a stack using an array & another class for a stack using a singly linked list
    - create methods for each: push, pop, isEmpty, size, peek (return top item without removing)
w2d2
- A queue is a FIFO (First in First Out) data structure
- create a class to represent a queue using an array & another class for a queue using a singly linked list
- create methods for each classes: enqueue (add item), dequeue (remove and return item), isEmpty, size, front (return first item without removing)
*/

class Stack {
    constructor(items = []) {
        this.items = items;
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }

        return this.items.pop();
    }

    peek() {
        // aka top
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        const str = this.items.join(" ");
        console.log(str);
        return str;
    }
}

// can add to back and remove from back to maintain a LIFO pattern
// OR can add to front and remove from front, still maintains a LIFO pattern but is faster
// because it requires no looping to the end of the linked list
class SLStack {
    constructor() {
        this.head = null;
    }

    // add to top (add new head)
    push(val) {
        const newNode = new Node(val);

        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    // remove from top, (remove head)
    pop() {
        if (this.head === null) {
            return null;
        }

        const removed = this.head;
        this.head = this.head.next;

        return removed.data;
    }

    // aka top
    peek() {
        if (this.head === null) {
            return null;
        }
        return this.head.data;
    }

    contains(val) {
        let runner = this.head;

        while (runner) {
            if (runner.data === val) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    isEmpty() {
        return this.head === null;
    }

    size() {
        let len = 0;
        let runner = this.head;

        while (runner) {
            len += 1;
            runner = runner.next;
        }
        return len;
    }

    print() {
        let runner = this.head;
        let vals = "";

        while (runner) {
            vals += `${runner.data}${runner.next ? ", " : ""}`;
            runner = runner.next;
        }
        console.log(vals);
        return vals;
    }
}

class Queue {
    constructor() {
        this.q = [];
    }

    enqueue(val) {
        this.q.push(val);
    }
    dequeue() {
        return this.q.shift();
        //https://alligator.io/js/push-pop-shift-unshift-array-methods/
    }

    isEmpty() {
        return this.q.length === 0;
    }

    size() {
        return this.q.length;
    }

    front() {
        if (this.isEmpty()) {
            return null;
        }
        else {
            return this.q[0];
        }
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLLQueue {
    constructor() {
        this.head = null;
    }
    isEmpty() {
        return this.head === null;
    }
    size() {
        if (this.isEmpty()) {
            return 0;
        }
        let runner = this.head;
        let count = 1;
        while (runner.next != null) {
            runner = runner.next;
            count++;
        }
        return count;
    }

    front() {
        if (this.isEmpty()) {
            return null;
        }
        return this.head.data;
    }

    enqueue(val) {
        // if it's empty, we add val as a node to the front
        if (this.isEmpty()) {
            this.head = new Node(val);
        }
        // if there is a line
        else {
            let runner = this.head
            // find the end of the queue
            while (runner.next !== null) {
                runner = runner.next;
            }
            // add val as a node to the end
            runner.next = new Node(val);
        }
    }

    dequeue() {
        console.log("first node: " + this.head.data);
        console.log("second node: " + this.head.next.data);
        let answer = this.head.data;
        // point head to the 2nd node of the list (could be null), effectively "deleting" the node
        this.head = this.head.next;
        return answer;
    }

}

let test = new Queue();
test.enqueue(1) // [1]
test.enqueue(2) // [1,2]
test.dequeue() // [2]
console.log(test.size()); // 1
console.log(test.isEmpty()); // false
console.log(test.front()); // 2
console.log("-------------------------");
let testSLL = new SLLQueue();
testSLL.enqueue(1) // [1]
testSLL.enqueue(2) // [1,2]
testSLL.dequeue() // [2]
console.log(testSLL.size()); // 1
console.log(testSLL.isEmpty()); // false
console.log(testSLL.front()); // 2


/*
        front       end
queue = [1,2,5,1,7,3,1]

*enqueue 2* = add 2 to the back

        front          end
queue = [1,2,5,1,7,3,1,2]

*dequeue* = remove from the front

        front          end
queue = [2,5,1,7,3,1,2]

*/