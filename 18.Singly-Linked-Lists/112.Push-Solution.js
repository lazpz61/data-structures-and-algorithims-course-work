/*
This function should accept a value
-Create a new node using the value passed to the function.
- If there is no head property on the list, set the head and tail to be the newly created node.
- Othersie set the next propertyy on the list to be the newly created node. 
- Increment the length by one. 
-Return the linked list.

*/


class Node{
    constructor(value){
        this.value = value,
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;

    }
}

