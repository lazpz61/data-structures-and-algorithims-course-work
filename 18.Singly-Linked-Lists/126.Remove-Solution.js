/*

Remove Pseudocode

- If the index is less than zero or greater than the length, return undefined.
- If the index is th esame as the length-1, property-1, property
- If the index is 0, shift.
- Otherwise, using the get method, access the node at the index - 1
- Set the next property on that node to be the next of the next node.
- decremenet the length.
- Return the value of the node removed. 

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
    
    unshift(value){
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
        this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter != index){
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, value){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.value = value;
            return true;
        }
        return false;
    }
    insert(index, value){
        if(index < 0 || index > this.length) return false;
        if (index === this.lenth) return !!this.push(value);
        if (index === 0) return !!this.unshift(value);
        let newNode = new Node(value);
        let previous =  this.get(index -1);
        let tempNode = previous.next;
        previous.next = newNode;
        newNode.next = tempNode;
        this.length++;
        return true;
    }

    remove(index){
        if(
        index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length -1) return this.pop();
        let previousNode  = this.get(index-1);
        let removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;

        return removed;
    }
}


let list = new SinglyLinkedList()

list.push(100);
list.push(201);
list.push(250);
list.push(350);