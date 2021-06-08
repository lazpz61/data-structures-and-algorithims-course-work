/* 
Multiple Pointers

- creating pointers or values that correspond to an index or position and move towards the beginning,
end or middle based on a certain condition

very efficient for solving problems with minimal space complexity asa well. 

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

