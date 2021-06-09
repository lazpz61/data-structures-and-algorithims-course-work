// Time complexity is the runtime.

// Space Complexity =  how much additional memory do we need to allocate in order to run the code in our algorithim.

// Aucxiliary Space Complexity refers to space required by the algorithm, not including space taken up be the inputs.Aucxiliary

// most Primitives (booleans, numbers, undefined, null) are constant space. 

// Strings require O(n) space where n is the string length.toExponential

// reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

function sum(arr) {
    let total = 0;
    for (let i = 0; i <arr.length; i++) {
    total +=arr[i];
    }
    return total;
}

// O(1) -  this is the space of the function above

function double(arr) {
    let newArr = [];
    for (let i = 0; i< arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;

}
