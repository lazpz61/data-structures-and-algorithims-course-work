//  Bubble Sort Implmenation


// Navie Solution

function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]){
                //swap
                let temp = arr[j];
                arr[j] = arr[j +1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

bubbleSort([37,45,29,8])

// Refactored


function bubbleSort(arr){
    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i -1; j++){
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]){
                //swap
                let temp = arr[j];
                arr[j] = arr[j +1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}