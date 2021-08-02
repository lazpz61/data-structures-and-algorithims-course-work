/*
- If the index is less than 0 or greater or equal to the length, return null.
- If the index is less than or equal to half the length of the list
    - Loop through the list starting from the head and loop towards the middle.
    - Return the node once it is found.
- If the index is greater than half the length of the list.
    - Loop through the list starting from the tail and loop towards the middle. 
    - Return the node once it is found.
*/

get(index){
    if(index < 0 || index >= this.length) return null;
    let count = 0;
    let current = this.head;
    while(count !=index){
        current = current.next;
        count++
     }
    } else {
    count =  this.length - 1;
    current = this.tail;
    while(count != index){
        current = current.previous;
        count--;
    }
}
return current;
}