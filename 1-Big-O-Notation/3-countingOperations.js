/* If not tim then what?

Counting the numner of simple operation the computer has to perform 
instead of counting the seconds which are so variable. 

The time it takes to run a program will always be determined by the number of operations it takes 
to arrive to the desired outcome of the code you are writing. 


*/

function addUpTo(n) { 
    return n * (n +1) /2; // 3 operations taking place
}

function count(n){
    let counter = 0
    for (let i=1; i<=n; i++){
      counter += i; //it is n additions the equal sign is also an assignment as well. 
    }
    return counter;
  }

// The number of operations grows roughly proportionally with n. 



