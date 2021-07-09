/*
Pivot Helper




-In order to implement quick sort, its useful to first implement a function responsible for arranging
element in an array on either side of a pivot.

- Given an array, this helper function should designate an element as the povit.
-It should then rearrange elements in the array so that values less than the pivot are moved to the left
of the pivot, and all values greater than the pivot are moved to the left of the pivot, and all values greater
than the pivot are moved to the right of the pivot.
- The order of elements on either side of the pivot doesnt matter.
- The helper should do this in place, that is it should not create a new array.
- When complete, the helper should return the index of the pivot. 

*/

// Picking a Pivot 

/*
-The runtime of quick sort depends in part on how one selects the pivot.
- Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting.
- for simplicity, we'll always choose the pivot to be the first element 
*/

// Pivot Pseudocode

/*
-It will help to accept three arguments, an array, a start index, and an end index.
- Grab the pivot from the start of the array
- Store the current pivot index in a variable(this will keep track of where the pivot should end up)
- Loop through the array from the start until the end.
    -if the pivot is greater than the current element, increment the pivot index variable and then swap the current
    element with the element at the pivot index. 
-Swap the starting element(ie. the pivot) with the pivot index.
-Return the pivot index. 
*/