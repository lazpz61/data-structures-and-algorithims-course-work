/*

Set Pseudocode:

- This function should accept a value and an index
- Use you get function to find the specific node.
- If the node found, return false.
- If the node is foundm set the value of that node to be the value passed to the function
and return true.

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
}

let list = new SinglyLinkedList()

list.push("Hello")
list.push("How")
list.push("Are")
list.push("You")

