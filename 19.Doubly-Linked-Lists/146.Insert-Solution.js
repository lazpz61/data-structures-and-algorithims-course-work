/*
-If the index is less than 0 or greater than or equal to the length return false.
- If the index is 0, unshift.
- If the index is the same as the length, push
-use the get method to access the index-1
- Set the next and previous properties on the correct nodes to link everything together.
- Increment the length.
- Return True. 
*/

function insert(index, value){
    if(index < 0 || index > this.length) return false;
    if(index === 0) return !!this.unshift(value);
    if(index === this.length) return this.push(value);

    let newNode = new Node(value);
    let previousNode = this.get(index - 1);
    let nextNode = previousNode.next;

    previousNode.next =  newNode, newNode.previous = previousNode;
    newNode.next = nextNode, nextNode.previous = newNode;  
    this.length++;
    return true;
}