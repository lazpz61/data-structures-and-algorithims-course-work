/*
Binary Search Pseudocode


-the function accepts a sorted array and a value

-create a left pointer at the start of the array, and a right pointer at the end of the array. 
-while the left pointer comes before the right pointer:
    -create a pointer in the midddle.
    -if you find the value you want, return the index.
    -if the value is too small, move the left pointer up.
    -if the value is too large, move the right pointer down. 
-If you never find the value, return -1.

 */Attempt

function binarySearch(arr,val){
    let start = 0;
    let end = arr.lengths -1;

    while (start <= end){
        let mid = Math.floor((start + end)/2);
        if (arr[mid]=== val){
            return ;
        } else if (arr[mid] < val){
            start = mid +1;
        } else {
            end = mid -1;
        }
    } 
    return false;
}

// returns the index so returns i essentially


function binarySearch(arr, value){
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2)  
    
    while(arr[middle] !== value && start <= end){
      console.log(start, middle, end)
      if(value < arr[middle]){
        end = middle - 1;
      } else {
        start = middle + 1;
      }
      middle = Math.floor((start + end) / 2)

    }
    console.log(start, middle, end)
    if(arr[middle]=== value){
      return middle;
    }
    return -1;
}


// refactored


function binarySearch(arr, value){
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2)  
    while(arr[middle] !== value && start <= end){
      if(value < arr[middle]) end = middle - 1;
      else start = middle + 1;
      middle = Math.floor((start + end) / 2);
    }
      return arr[middle] === value ? middle : -1;
}





