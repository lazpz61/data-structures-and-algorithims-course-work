/* 

Big O Notation is a way to formalize fuzzy counting.

It allows us to talk formally about the runtime of an algorithim grows as the inputs grow.


We say that an algorithim is O(f(n)) if the number of simple operations the computer has to do
is eventually less than a constant times f(n), as n increases. 

Linear  (f(n) - n)
Quadratic (f(n)=n^2)
Constant (f(n) =1)
Or it can be something entirley different. 

O(1) this is telling us that as n grows 


*/


function printAllPairs(n) {
    for (let i =0; i <n; i++) {
        for (let j =0; j <n; j++) {
            console.log(i, j);
        }
    }
}

// The above function is an example of O(n) operation inside of an O(n) operation. 

// as n grows the runtime grows at a rate of n^2 O(n^2) - this is an example of N quadratic. 




