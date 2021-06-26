// Selection Sort is the inverse from bubble Sort.


/*
Similar to bubble sort, but instead of first placing large values into sorted position, it places
small values in sorted position.

Placing the smallest minimum and placing it in the begginning.
*/


// Selection Sort Pseudocode

/*
- Store the first elemenet as the smallest value you;ve seen so far
- compare this item to the next item in the array until you find a smaller number.
-If a smaller number is found, designate that smaller number to be the new minimum, and continue
until the end of the array
- if the minimum is not the value (index) you initially began with, swap the two values.
- Repeat this with the next element until the array is sorted. 

*/

function selectionSort(arr){
    for(let i = 0; arr.length; i++){
        let lowest = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;    
        }
       
    }
    return arr;
}

selectionSort([34,22,10,19,17]);

