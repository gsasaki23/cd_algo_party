/* 
Members: Edely, Gaku, Isiah

Create a singly linked list with the following methods:
- insertToBack
-seedFromArray = convert given array to linked list
- print = print a comma separated string of your linekd list data

Bonus:
- design the linked list so that you can add a new node to the back in O(1) constant time (no looping)
*/

class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class SLL {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    insertToBack(val) {
        let node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        return this;
    }
    seedFromArray(array) {
        if (array.length === 0) return;
        for (let item of array){
            this.insertToBack(item);
        }
        return this;
    }
    print(){
        let answer = "";
        if (this.head === null) {
            console.log("")
            return this;
        }
        
        let runner = this.head;
        while(runner !== null){
            if (answer === ""){
                answer += (runner.val.toString());
            }
            else {
                answer += (", " + runner.val);
            }
            runner = runner.next;
        }
        console.log(answer);

        return this;
    }
}

let testSLL = new SLL();
testSLL.insertToBack(5); // SLL: 5
testSLL.insertToBack(10); // SLL: 5 -> 10
console.log("testSLL:");
testSLL.print();

let testArray = [5,10];
let testSLLB = new SLL();
testSLLB.seedFromArray(testArray);
console.log("testSLLB:");
testSLLB.print();