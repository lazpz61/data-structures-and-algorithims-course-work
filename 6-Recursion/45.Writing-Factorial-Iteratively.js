// Factorial is 4! this is equal to 4*3*2*

function factorial(num){
    let total =1;
    for(i=num; i > 0; i--){
        total *=i
    }
    return total;
}