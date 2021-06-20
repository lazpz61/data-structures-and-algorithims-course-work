/*
Write a function called productOfArray which take in an array of numbers
and returns the product of them all. 
*/

function productOfArray(array){
    if(array.length === 0){
      return 1;
    } 
    return array[0] * productOfArray(array.slice(1));
}