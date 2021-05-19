// Supposed we want to write a function that calculares the sum of all numbers from 1 up to (and including) some number n

function count(n){
    let counter = 0
    for (let i=1; i<=n; i++){
      counter += i;
    }
    return counter;
  }
  count(10);

  and 

function addingUpTo(n) {
    return n * (n +1) /2;
}

addingUpTo(10);

// How to test the speed of the code you wrote.

let t1 = performance.now();
addingUpTo(10000000000);
let t2 = performance.now();
console.log(`Time elapsed: ${(t2-t1) / 1000} seconds.`)

/* Problem with Time

- differen machines will record different times. margins can change.
-same machine will record different times!
- for fast algorithims, speed measurement may not be precise enough.

*/