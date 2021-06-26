// Bubble Sort Optimization

// The reason for this optimization is to control when the swaps stop happening to stop the loop and break out of it.

// This leads to a better and cleaner callstack on the console. 

function bubbleSort(arr){
    let noSwaps;
    for(let i = arr.length; i > 0; i--){
        noSwaps = true;
        for(let j = 0; j < i -1; j++){
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]){
                //swap
                let temp = arr[j];
                arr[j] = arr[j +1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}
