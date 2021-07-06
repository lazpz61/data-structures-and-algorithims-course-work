/*
Quicksort Pseudocode:


-Call the pivot helper on the array.
- When the helper returns to you the updated pivot index, recursively call the pivot helper
on the subarray to the left of that index, and the subarray to the right of that index.
- Your base case occurs when you consider a subarray with less than 2 elements. 
*/

function pivot(array, start=0, end=array.length-1){
    function swap(arrayItemForSwap, idx1, idx2){
        let temporaryIndex =arrayItemForSwap[idx1];
        arrayItemForSwap[idx1] = arrayItemForSwap[idx2];
        arrayItemForSwap[idx2] = temporaryIndex;
    }
  
  let pivot = array[start];
  let swapIdx = start;
  
  for(let index = start +1; index < array.length; index++){
      if (pivot > array[index]){
          swapIdx++;
          swap(array, swapIdx, index)
      }
     }
     swap(array,start,swapIdx)
     return swapIdx;
  }
  
  function quickSort(arrayToSort, left = 0, right = arrayToSort.length -1){
      if(left < right){ // as soon as left and right are in the same index. 
       let pivotIndex = pivot(arrayToSort, left, right);
       //left
      quickSort(arrayToSort,left,pivotIndex-1);
      // right
      quickSort(arrayToSort,pivotIndex+1,right);
      }
      return arrayToSort;
  }
  
  quickSort([4,6,9,1,2,3]);
