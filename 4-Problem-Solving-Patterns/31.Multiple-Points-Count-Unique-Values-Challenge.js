/*
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted.
*/

function countUniqueValues(arr){
    if (arr.length === 0) return 0;
    let i = 0;
    let j =1;
    while(j < arr.length){
        if(arr[i] !== arr[j]){
            arr[++i] = arr[j]
        } 
            j ++;
    }
    return i + 1
}