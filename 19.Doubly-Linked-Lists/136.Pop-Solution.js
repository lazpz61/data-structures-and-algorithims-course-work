/*
Popping Pseudocode:
- If there is not head, return undefined
- store the current tail in a variable to return later.
- If the length is 1, set the head and tail to be null
- Update the tail to be the previous Node. 
- Set the newTail's next to null
- Decrement the length
- Return the value removed. 
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
   pop(){
     if(!this.head) return undefined;
      let poppedNode = this.tail;
      if(this.length === 1){
          this.head = null;
          this.tail = null;
      } else {
          this.tail = poppedNode.previous;
          this.tail.next = null;
          poppedNode.previous = null;
      }
      this.length--;
      return poppedNode;
   }
}