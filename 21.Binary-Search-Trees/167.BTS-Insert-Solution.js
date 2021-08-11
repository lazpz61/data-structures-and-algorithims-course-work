/*
Inserting Pseudocode:

-Create a new node
- Starting at the root.
    -Check if there is a root, if not -  the root becomes that new node!
    - If there is a root, check if the value of the new node is greater than or less than the value of the root.
    -if it is greater 
        -Check to see if there is a node to the right
            -if there is, move to that node and repeat these steps.
            -if there is not, add that node as the right property.
    -If it is less
        -Check to see if there is a node to the left
            -if there is, move to that node and repeat these steps.
            - if there is not, add that node as the left property. 
*/

class Node{
    constructor(value){
        this.value =  value;
        this.left = null;
        this.right =  null;
    }
}
class BinarySearchTree {
    constructor(){
        this.root =  null;
    }

    insert(value){
        let newNode =  new Node(value);
        if(this.root === null){
            this.root =  newNode;
            return this;
        } else{
            let current =  this.root;
            while(true){
                if(value === current.value) return undefined;
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if(value > current.value){
                    if(current.right === null){
                        current.right =  newNode;
                        return this;
                    } else {
                        current= current.right;
                    }
                }
            }
        }
    }
}

let tree =  new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(2);
tree.insert(11);
tree.insert(16);
tree.insert(7);




// let tree =  new BinarySearchTree();
// tree.root =  new Node(10);
// tree.root.right =  new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);