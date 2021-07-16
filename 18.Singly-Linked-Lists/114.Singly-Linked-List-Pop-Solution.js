/*
Popping - is removing from the end of a linked list. 

Popping Pseudocode 

-If there are no nodes in the lift, return undefined.
-Loop through the list until you reach the tail.
-Set the next property of the 2nd to last node to be null 
- Set the tail to be the 2nd to last node
-Decrement the lneght of the list by 1
-Return the value of the node removed
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
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}
