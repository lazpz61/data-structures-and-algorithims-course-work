/*

What is a Linked List?

Data structure that store data and order, and it contains a head, tail and length property.

A Linked list consists of nodes, and each node has a value and a pointer to another node or null. 

Nodes stores data, and references the next node, or if theres nothing left. Head is beginning and the tail is the end

keeping track of length to keep track of things.

a bunch of nodes pointing to another a chain of data points the points to another point of data. 

*/


// Comparing and Contrasting with Arrays

// Lists
/*

- Do not have indexes
-Connected via Nodes with a next pointer
- Random Access is not allowed


*/

//Arrays
/*
-Indexed in Order!
-Insertion and deletion can be expensive.
-Can quickly be accessed at a specific index.
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

let list = new SinglyLinkedList()
list.push("Hello")
list.push("Goodbye")