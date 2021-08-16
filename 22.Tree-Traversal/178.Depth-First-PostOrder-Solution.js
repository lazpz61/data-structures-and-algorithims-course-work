/*

DFS  -  Post Order

- Create a variable to store the value of nodes visited.
- Store the root of the BST in a variable called current.
- Write a helper function which accepts a node. 
    - If the node has a left property, call the helper function.
      with the left property on the node.
    - If the node has a right property, call the helper function with the right 
        property on the node. 
    - Push the value of the node to the variable that stores the values.
    - Invoke the helper function with the current variable.
- Return the arrray of values.

*/

function DepthFirstSearchPostOrder() {
    let data = [];
    function traverse(node){
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
        data.push(node.value);
    }
    traverse(this.root);
    return data;
}