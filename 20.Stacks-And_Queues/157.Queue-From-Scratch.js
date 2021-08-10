/*
Add to the end and remove from the beginning.
This replicates the FIFO Method.

Enque is adding the end
and Deque is removing from the beginning.



Enqueue Pseudocode:
- The function accepts some value.
- Create a new node using that value passed to the function.
- If there are no nodes in the queue, set this node to be the first and last property of the queue.
- Otherwise, set the next property on the current last to be that node, and then set the last property
of the queue to be the that node.
-Increment the size of the queue by 1.

Dequeue Pseudocode:
- If there is no first property, just return null.
- Store the first property in a varible.
- See if the first is the same as the last(check if thee is only 1 node).
If so, set the first and last to be null.
- If there is more than 1 node, set the first property to be the next property of first.
- Decrement the size by 1.
- Return the value of the node dequeued.
*/

class Node{
    constructor(value){
        this.value =  value;
        this.next =  null;
    }
}
class Queue{
    constructor(){
        this.first =  null;
        this.next = null;
        this.size = 0;
    }
//   This method will ad to the end of the linked list  
    enqueue(value){
        let newNode =  new Node(value);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next =  newNode;
            this.last =  newNode;
        }
        return ++this.size;
    }
//     This will remove from the beginning
    dequeue(){
       if(!this.first) return null;

       let temporaryNode =  this.first;
       if(this.first === this.last){
           this.last =  null;
       }
       this.first = this.first.next;
       this.size--;
       return temporaryNode.value
    }
}



