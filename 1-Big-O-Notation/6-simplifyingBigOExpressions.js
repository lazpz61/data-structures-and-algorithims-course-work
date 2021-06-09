// // When determining the time complexity of an algorithm, there are some helpful
// rules of thumb for big O expressions. 

/* Constants Dont Matter

O(2n) is O(n)

O(500) is O(1)


O(13n^2)  is O(n^2)

*/

/* smaller terms dont matter

O(n+10) can be simplified to O(n)

O(1000n +50) can be simplified with O(n)

O(n^2 + 5n +8) can be simplified with O(n^2)




*/



/*

Big O Shorthands

1) Arithmetic operations are constant.
2) Variable assignment is constant. 
3) Accessing elements in an array (by index) or object (by key) is constant 
4) In a loop, the complexity is constant length of the loop times the complexity of whatever happens inside of the loop.

*/


function logAtLeast5(n) {
    for (let i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}

// this is going is going to be O(n)

function logAtMost5(n) {
    for (let i =1; i <= Math.min(5,n); i++) {
        console.log(i);
    }
}

// This is going to O(1)

// O(1) is the fastst runtime then O(n) is second then O(n^2) is slower than O(n).
