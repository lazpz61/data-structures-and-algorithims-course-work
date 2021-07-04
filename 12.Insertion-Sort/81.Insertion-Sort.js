// Insertion sort

/*

similar to bubble sort and selection sort, it is different in situation where it does well.

-  It builds up the sort by gradually creating a larger half which is always sorted. 

*/

// Pseudocode

/*
-Start by picking the second element in the array.
-Now compare the second element with the one before it and swap if necessary.
- Continue to the next element and if it is in the incorrect order, iterate through the sorted portion
(i.ie the left side) to place the element in the correct place. 
- Repeat until the array is sorted.

*/
function insertionSort(array){
  for(let index = 1; index < array.length; index++){
      let currentVal= array[index];
      for (let indexToCompare = index - 1; indexToCompare >= 0 && array[indexToCompare] > currentVal; indexToCompare--){
        arr[indexToCompare + 1] = array[indexToCompare];
        array[indexToCompare+1] = currentVal;
      }
       console.log(array);
  }
  return array;
}


insertionSort([2,1,9,76,4]);

