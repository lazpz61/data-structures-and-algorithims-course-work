/* 
Multiple Pointers

- creating pointers or values that correspond to an index or position and move towards the beginning,
end or middle based on a certain condition

very efficient for solving problems with minimal space complexity as well. 

*/

/*
Write a function called SumZero which accepts a sorted array of integers.
The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero
or undefined if a pair does no exist. 
*/

// Naive approach

function sumZero(arr) {
    for (let i = 0; i <arr.length; i++){
        for(let j = i+1; j <arr.length; j++){
            if(arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

// Refactored Approach


// A do while loop is used because there is a comparison with the last index and the first index in the array. 

function sumZero(arr){
    let left  = 0;
    let right = arr.length -1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}