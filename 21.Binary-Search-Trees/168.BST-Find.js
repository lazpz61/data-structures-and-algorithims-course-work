/*

Finding a Node in a BST


- Starting at the root
    -Check if there is a root, if not- we're done searching!
    -If there is a root, check if the value of the new node is the value we are looking for. IF we found it we're done.
    - If not, check to see if the value is greater than or less than the value of the root
    - if it greater
        -check to see if there is a node to the right
            -if there is, move to that node and repeat these steps.
            - if there is not, we're done seacrching!
    - if it is less
        -Check to see if there is a node to the left.
            -if there is, move to that node and repeat these steps.
            - If there is not, we're done searhcing!

*/