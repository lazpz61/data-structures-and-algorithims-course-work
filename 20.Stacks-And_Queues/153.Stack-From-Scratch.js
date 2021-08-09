/*
Stack Push Pseudocode:
- The function should accept a value.
- Create  anew node with that value.
- If there are no nodes in the stack, set the first and last
property to be the newly created nodes
- If there is at least one node, create a variable that stores
the current first property on the stakc.
- Reset the first property to be the newly created node.
- Set the next property on the node to be the previously
created variable.
- Increment the size of the stack by 1.

Stack Pop Pseudocode:
- If there are no nodes in the stack, return null.
- Create a temporary variable to store the first property on the stack.
- If there is only 1 node, set the dfirst and last property to be null.
- IF there is more than one node, set the first property to be the next property
to be the next property on the current first.
- Decremenet the size by 1
- Return the value of the node removed. 

*/

class Node{
    constructor(value){
        this.value =  value;
        this.next =  null;
    }
}

class Stack {
    constructor(){
        this.first =  null;
        this.last =  null;
        this.size =  0;
    }
    push(value){
        let newNode =  new Node(value);
        if(!this.first){
            this.first =  newNode;
            this.last = newNode;
        } else{
            let temporaryNode =  this.first;
            this.first =  newNode;
            this.first.next = temporaryNode;
        }
        return ++this.size;
    }
    pop(value){
        if(!this.first) return null;
        let temporary = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temporary.value
    }
}
