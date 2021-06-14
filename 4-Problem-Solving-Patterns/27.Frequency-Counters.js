/*

Write a function called (same), which accepts two arrays. 
The function should return true if every value in the array has it's corresponding value squared in the second array.
The frequency of value must be the same. 

*/

function same(arr1,arr2){
    if(arr1.length !== arr2.length) {
        return false; // if the two arrays are not the same length then this is placed for elimination
    }
    for (let i= 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2) // this is setting a variable for each iteration of arr1 and squaring it
        // so that we can splice it later and check to see if there are any. what index in array 2 would contain square root in array 1
        if (correctIndex === -1)  {  // <-- this line say if its not in there then we return false. 
            return false;
        } 
        arr2.splice(correctIndex, 1) // <-- we take out the values out of the array to check for it. 
    }
    return true
}

same([1,2,3,2] , [9,1,4,4]);


// Refactored

function same(arr1, arr2){
    if(arr1.length!== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1) {
        frequencyCounter1 [val] = (frequencyCounter [val] || 0) +1
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        } //<-- the logic is checking to see if the square root and the exponential values exists in between each array. 
    }
    return true
}












// Frequency Functions

const numbers = [1,2,3,4,5,6,7,8,9,10]

function numbersExample(x){
  for(let num of x){
    if(num === 3 || num === 7) {
      console.log("Ding!")
    } else {
      console.log(num);
    }
  }
}

numbersExample(numbers);