// Searching for substrings inside of strings. 


/*
-Suppose you want to count the number of times a smaller string appears ina  longer string.

- A Straightforward appraoch involves checking pairs of characters individually. 

*/

/*
-Loop over the longer string
-loop over the shorter string.
-if the character dont matchm break out of the inner loop
-if the character do match, keep going.
-if you complete the inner loop and find a match incremene tth ecount of matches
- return the count.
*/

// Finding the shortStr inside of the longStr.


function searchStrings(longStr, shortStr){
    let count = 0
    for(let i=0; i <longStr.length; i++){
      for(let j=0; j < shortStr.length; j++){
        console.log(shortStr[j], longStr[i+j])
        if (shortStr[j] !== longStr[i+j]){
          console.log("Break");
          break;
        }
        if(j === shortStr.length -1){
          console.log("Found One!");
          count++;
        }
      }
    }
    return count;
  }

//   Refactored


function searchStrings(longStr, shortStr){
    let count = 0
    for(let i=0; i <longStr.length; i++){
      for(let j=0; j < shortStr.length; j++){
        if (shortStr[j] !== longStr[i+j]) break;
        if(j === shortStr.length -1) count++;
      }
    }
    return count;
}



