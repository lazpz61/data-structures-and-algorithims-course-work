/*
Unshifting Pseudocode:
- Crreate a new node with the value passed to the function
- If the lengfth is 0
    -Set the head to be the new node.
    -Set the tail to be the new node.
- Otherwise
    -Set the previous property on the head of the list to be the new node.
    -Set the next property on the new node to be the head property.
    -Update the head to be the new node.
-Increment the length.
*/

unshift(value){
    let newNode = new Node(value);
    if(this.length === 0){
        this.head = newNode;
        this.tail = newNode;
    } else {
        this.head.previous = newNode;
        newNode.next = this.head;
        this.head = newNode;
    }
    this.length++;
    return this;
}


