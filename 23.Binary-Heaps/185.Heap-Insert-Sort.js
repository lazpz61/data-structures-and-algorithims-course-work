/*
Adding to a MaxBinaryHeap 


- Add to the end
- Bubble up - is comparing to the parent and swap is the child is larger than the parent. 
- Then compare to the parent again and swap it again. 
*/

// Inset Pseudocode

/*
- push the value into the values property on the heap.
- Bubble the value up to its correct spot!
*/

//Detailed Pseudocode

/*
- push the value into the values property on the heap.
- Bubble Up:
    - Create a varibale called index which is the length of the values property - 1.
    - Create a variable called parentIndex which is the floow of (index-1)/2
    -Keep looping as long as the value element at the parentIndex is less than the values element
        at the child index.
            - Swap the value of the values element at the parentIndex with the value of the element property
            at the child index.
            - Set the index to be the parentIndex, and start over!



*/