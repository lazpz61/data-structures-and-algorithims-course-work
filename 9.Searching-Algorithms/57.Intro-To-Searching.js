// How do we search?

/*

Given and array, the simplest way to search for a value is to look at every element in the array
and check if its the value we want. 

Linear search 

-indexOf
-includes
-find
-findIndex

*/


// Linear Search -  Let's Search for 12:

[5,8,1,100,12,3,12]

// Write a function accepts an array and value
// Loop through the array and check if the current array element is equal to the value
// if it is, return the index at which the element is found.
// if the value is never found, return 1

function linearSearch(arr, val){
    for( let i = 0; i < arr.length; i++){
        if (arr[i] === val){
          return i
        }   
    }
    return -1;
  }

//   The time cimplexity of this function is O(N) as the length of the arraty grows so does the time. 








