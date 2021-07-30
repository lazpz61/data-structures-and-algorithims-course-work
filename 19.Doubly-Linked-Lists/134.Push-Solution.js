/*
Pushing Pseudocode:
- Create a new node with the value passed to the function
- If the head property is ull set the head and tail to be the newly created node.
- If not, set the next property on the tail to be that node.
- Set the previous property on the newly created node to be the tail.
-Set the tail to be the newly created node.
- increment the length.
- Return the Doubly Linked List. 
*/

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){
        let newNode = new Node(value);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;   
        } else {
            this.tail.next =  newNode;
            newNode.previous = this.tail;
            this.tail = newNode
        }
        this.length++;
        return this
    }
}
