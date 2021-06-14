// Quicksort and Merge sort are divide and conquer

// Dividing a larger chunk of data and breaking into smaller chunks.


// An Example

// given a sorted array of integers, write a function called search, that acepts a value and returns the index
// where the value passed to the function is located. If the value is not found, return -1.

// Binary Search.


Function search(arr, val){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === val){
            return i;
        }
    }
    return -1;
}


function search(array, val){
  let min=0;
  let max= array.length -1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (array[middle] < val){
      min = middle + 1;
    }
    else if (array[middle] > val) {
      max = middle -1;
    }
    else {
      return middle;
    }
  }
  return -1;
}
