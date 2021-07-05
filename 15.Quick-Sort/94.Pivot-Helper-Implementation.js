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

function pivot(arr, start=0, end= arr.length-1){
    function swap(array, i,j){
        let temp =array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  
  let pivot = arr[start];
  let swapIdx = start;
  
  for(let index = start +1; index < arr.length; index++){
      if (pivot > arr[i]){
          swapIdx++;
          swap(arr, swapIdx, i)
      }
     }
     swap(arr,start,swapIdx)
     return swapIdx;
  }

  
//  ES6



function pivot(array, start = 0, end = array.length -1){
    const swap= (array, index1, index2) => {
        [array[index1], array[index2]] = [array[index2], array[index1]];
    };

    // assuming the pivot is always the first element
    let pivot = array[start];
    let swapIndex = start;

    for(let index = start+1; index <= end; index++){
        if (pivot > array[index]){
            swapIndex++;
            swap(array, swapIndex, index)
        }
}
// Swap the pivot from the start of the swapPoint
swap(array,start,swapIndex);
return swapIndex;
}

pivot([4,8,2,1,5,7,6,3]);