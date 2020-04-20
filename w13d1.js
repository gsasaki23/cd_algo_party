/* w3d1
    1. recursiveLast: recursively return the value / data of the last node
    2. SList: Partition
        - partition a SList such that all values less than the given value are to the left of it, and all values greater than the given value are to the right (not perfectly sorted)
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
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

    moveMinToFront() {
        if (this.isEmpty()) {
            return;
        }

        let runner = this.head;
        let min = this.head.data;

        while (runner) {
            if (runner.data < min) {
                min = runner.data;
            }
            runner = runner.next;
        }
        // now that we know the min, if it is alredy the head, nothing needs to be done
        if (this.head.data === min) {
            return;
        }

        let prev = this.head;
        runner = this.head.next;

        while (runner) {
            if (runner.data === min) {
                prev.next = runner.next; // remove the min
                this.insertAtFront(min);
                return;
            } else {
                prev = runner;
                runner = runner.next;
            }
        }
    }

    displayPeople() {
        let runner = this.head;
        let names = "";

        while (runner) {
            names += `${runner.data.firstName} ${runner.data.age}${runner.next ? ", " : ""}`;
            runner = runner.next;
        }
        console.log(names);
        return names;
    }

    secondToLast() {
        if (this.isEmpty() || this.head.next === null) return null;
        let runner = this.head;
        while(runner.next.next !== null) runner = runner.next;
        return runner.data;
    }

    concat(another) {
        if (another.isEmpty()) {return;}
        if (this.isEmpty()){
            this.head = another.head;
        }
        let runner = this.head;
        while(runner.next !== null){
            runner = runner.next;
        }
        runner.next = another.head;
        return;
    }

    insertPersonAscAge(person){
        // Edge case: Empty List (Early Exit)
        if (this.isEmpty()){
            this.insertAtFront(person);
        }
        let runner = this.head;
        // Edge Case: new person is not greater than the ONE person in list
        if (runner.data.age >= person){
            let newNode = new Node(person);
            newNode.next = this.head;
            this.head = newNode;
        }
        // Else find right place and add
        while(runner.next !== null){
            if (runner.next.data.age < person.age){
                runner = runner.next;
            }
            else {
                let newNode = new Node(person);
                newNode.next = runner.next;
                runner.next = newNode;
                return;
            }
        }
        // Edge Case: new person is the oldest
        // (runner is at last node if it reached here)
        runner.next = new Node(person);
    }

    valAtBackRecursive(runner = this.head){
        if (this.isEmpty){return null;}
        if (!runner.next){return runner.data;}
        return this.valAtBackRecursive(runner.next);
    }

}