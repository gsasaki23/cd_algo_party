/* 
  - A stack is a LIFO (Last in First Out) data structure
  - create a class to represent a stack using an array & another class for a stack using a singly linked list
    - create methods for each: push, pop, isEmpty, size, peek (return top item without removing)
*/

class Stack {
    constructor() {
        this.array = [];
    }
    push(val) {this.array.push(val)}
    pop() {return this.isEmpty() ? null : this.array.pop();}
    isEmpty() {return this.size() === 0;}
    size() {return this.array.length;}
    peek() {return this.isEmpty() ? null : this.array[this.array.length-1];}
}
class Node{
    constructor(val){
        this.data = val;
        this.next = null;
    }
}
class SLLStack {
    // LIFO so we'll add and pop newer values closer to the SLL head
    constructor() {
        this.head = null;
        this.length = 0;
    }
    push(val) {
        if (this.isEmpty()){
            this.head = new Node(val);
        }
        else{
            let newNode = new Node(val);
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return;
    }
    pop() {
        if (this.isEmpty()){return null;}
        let answer = this.head.data;
        this.head = this.head.next;
        this.length--;
        return answer;
    }
    isEmpty() {return this.length === 0;}
    size() {return this.length;}
    peek() {return this.head.data;}
}

let stack = new SLLStack();
stack.push(1);
stack.push(2);
stack.pop()
console.log(stack.size()); // prints 1
console.log(stack.isEmpty()); // prints false
stack.push(1);
console.log(stack.peek()); // prints 1