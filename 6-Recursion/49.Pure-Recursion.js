// Pure Recursion

/*
this involves having to utilize functions that combine the end result of what you are solving for, such as concat
and using array methods to come to do recursion so that it makes the list that you are looking to solve for. 
*/


function collectOddValues(arr){
    let newArr = [];

    if(arr.length === 0) {
        return newArr;
    }

    if(arr[0] % 2 !==0){
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

/*
Pure Recursion tips:

- For arrays, we should use methods like slice, the spread operator, and concat that make copies of arrays
so that we dont mutate them. 

- Remember that strings are immutable so you will need to use methods like slice substr, or substring
to make copies of strings.

- To make copies of object use Object.assign, or the spread operator. 




*/


