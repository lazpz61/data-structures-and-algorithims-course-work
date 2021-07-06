/*

Radix Sort needs a few helper functions first.  

The get digit helper function will get us the digit in place
This returns the digit in num at the given place value. 

*/





// The below is the radix sort helper method 



function getDigit(number, index) {
    return Math.floor(Math.abs(number) / Math.pow(10,index)) % 10;
}

/*
Now what we'll need a is a count for what is the amount of digits for the highest valued number. 


*/

function digitCount(number) {
    if (number === 0) return 1;
    return Math.floor(Math.log10(Math.abs(number)))+1;
}

/*
Most Digits : given an array of number, returns the number of digits in the largest numbers in the list.
*/

function mostDigits(numbers){
    let maximumDigits = 0;
    for (let iteratedNum = 0; iteratedNum < numbers.length; iteratedNum++){
        maximumDigits = Math.max(maximumDigits, digitCount(numbers[iteratedNum]));
    }
    return maximumDigits;
}


