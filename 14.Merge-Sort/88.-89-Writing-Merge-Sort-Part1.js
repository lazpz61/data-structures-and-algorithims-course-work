/*

-Break up the array in halves until you have arrays that are empty or have one element. 
(using slice recursively)

- Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are
back at full length of the array. 

- Once the array has been merged back together, return the merged (and sorted!) array

*/

function merge(arr1,arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if (arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length){
        results.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        results.push(arr2[j]);
        j++;
    }
 
    return results;
 }
 
 
 function mergeSort(arr){
     if(arr.length <= 1) return arr;
     let mid = Math.floor(arr.length/2);
     let left = mergeSort(arr.slice(0,mid));
     let right = mergeSort(arr.slice(mid));
     return merge(left,right);
 }
 
 
 // merge([1,10,50], [2,14,99,100])
 
 mergeSort([10,24,76,73,72,1,9]);