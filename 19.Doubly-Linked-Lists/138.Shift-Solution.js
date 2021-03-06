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
   shift(){
       if(this.length === 0) return undefined;
       let oldHead =  this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
                this.head = oldHead.next;
                   this.head.previous = null;
                oldHead.next = null;
        } 
        this.length--;
        return oldHead;
   }
}

let list =  new DoublyLinkedList()
list.push("Laz")
list.push("Lazy")
list.push("Lazaro")