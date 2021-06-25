// Bubble Sorting Algorithms

/*

only one case in which it is best utilized.

This process goes from checking if the index before the next is larger or smaller value,
if the index value is larger it gets swapped to the right, and the smaller value gets swapped to the left.


*/

// Function for swapping

function swap(arr, idx1, idx2){
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}


let array = [1,4,6,3,10,8,9];

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}


// Pseudocode
 /*
 -Start looping a variable called i from with the end of the array towards the beginning.
 - Start an inner loop with a variable called j from the beginning unti i -1.
 - If arr[j] is grearted than arr[j+1], swap those two values!. 
 - Return the sorted array. 
 */



