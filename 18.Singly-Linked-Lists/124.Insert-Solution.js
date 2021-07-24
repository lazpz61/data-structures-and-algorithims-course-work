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
}


let list = new SinglyLinkedList()

list.push(100);
list.push(201);
list.push(250);
list.push(350);