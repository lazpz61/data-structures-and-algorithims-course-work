/*
Remove Pseudocode:
- If the index is less than 0 or greater than or equal to the length return undefined.
- If the index is 0, shift
- If the index is the same as the length-1, pop
- Use the get method to retrieve the item to be removed.
-update the next and previous properties to remove the found node from the list.
- Set the next ansd previous node to null on the found node. 
- Decrement the length.
- Return the removed node.
*/

function  remove(index){
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length - 1) return this.pop();

    let removedNode = this.get(index);
    removedNode.previous.next =  removednode.next;
    removedNode.next.previous = removedNode.previous;
    
    removed.next = null;
    removedNode.previous = null;
    this.length--;
    return removedNode;
}
