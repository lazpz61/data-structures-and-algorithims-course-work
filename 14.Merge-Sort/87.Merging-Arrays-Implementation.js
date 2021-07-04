/*
Psuedocode - 


- Create an empty array, take a look at the smallest values in each input array.
- while there are still values we haven't looked at ... 
    - If the value in the first array is smaller than the value in the second array
    push the value in the first array into our result and move on to the next value in the first array.
    -If the value in the first array is larger than the value in the second array, push the value in the second array 
    into our results and move on to the next value in the second array.
    - Once we exhuast one array, push in all remaining values from the other array. 
*/

function merge(array1,array2){
    let mergedResults = [];
    let firstArrayVal = 0;
    let secondArrayVal = 0;
    while(firstArrayVal < array1.length && secondArrayVal < array2.length){
        if (array2[secondArrayVal] > array1[firstArrayVal]){
            mergedResults.push(array1[firstArrayVal]);
            firstArrayVal++;
        } else {
            mergedResults.push(array2[secondArrayVal])
            secondArrayVal++;
        }
    }
    while(firstArrayVal < array1.length){
        mergedResults.push(arr1[firstArrayVal]);
        firstArrayVal++;
    }
    while(secondArrayVal < array2.length){
        mergedResults.push(array2[secondArrayVal]);
        secondArrayVal++;
    }
 
    return mergedResults;
 }
 
 merge([1,10,50], [2,14,99,100])