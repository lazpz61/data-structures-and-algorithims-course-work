/*
Write a recursive function called fib which accepts a umber and returns the nth number in the 
fibonacci sequence. Recall that the fibonacci sequence is the sequence of whole 
numbers 1,1,2,3,5,8 which start with 1 and 1, and ever number thereafter is equal
to the sum of the previous two numbers.
*/

function fib(sequence){
    if (sequence <= 2) return 1;
return fib(sequence-1) + fib(sequence-2);
}