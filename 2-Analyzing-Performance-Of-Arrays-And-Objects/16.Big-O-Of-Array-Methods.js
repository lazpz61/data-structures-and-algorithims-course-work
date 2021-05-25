/*
Big O of Array Operations


push and pop O(1)

shift, unshift, concat, slice, splice - O(n)

slice -  how many elements are we trying to copy. 
splice -  remove and add new elements, its versatile we can insert at 
beginning and end, replace give an element, in general it is O(n). Even if its in the middle. 

sort - O(N* log N)

sort - the time it takes to sort an array is larger than O(n).
We have to make comparissons, we have to move things around.
Its not enough to just look at every element once, and thats not enough just to sort it. 

Sort is the slowest operation for arrays. 

forEach, Map, filter, reduce, etc - O(n).

as the size of the array grows so does the amount of time it takes. 

*/