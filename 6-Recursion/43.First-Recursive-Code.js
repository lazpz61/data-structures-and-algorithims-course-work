// How Recursion functions work.

// Invoking the same function with a different input until you reach your base case!

/*

The Base Case

- The condition when the recursion ends. 

- This is the most important concept to understand. 


2 Essential parts of a recursive function 

-Base Case
-Different Input.

*/


// 


function countDown(num){
    if(num <= 0){
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
