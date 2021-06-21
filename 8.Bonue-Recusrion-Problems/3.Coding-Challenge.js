
/*

Write a recrusive function called someRecursive which accepts an array and a callback.
The function returns true if a single value in the array returns true when passed to teh callback.
otherwise it returns false.
*/

// Dont use for 100 Days of Code

function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1),callback);
}