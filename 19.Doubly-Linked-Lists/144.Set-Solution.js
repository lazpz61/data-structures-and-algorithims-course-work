/*
- Create a variable which is the result of the get method at the index passed to the function.
    - if the get method returns a valid node, set the value of that node 
    to be the value passed to the function.
    - Return True
- Otherwise, return false.
*/

function  set(index, value){
    let foundNode = this.get(index);
    if(foundNode !== null){
        foundNode.value = value;
        return true;
    }
    return false;
   
}

