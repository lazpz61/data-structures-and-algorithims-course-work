// Intro to Big O

/* Is used to understand which code implementation is best for maximum efficiency.

way of generalizing code, and compare to other peices of code. 
 */

// Write a function that acceps a string input and returns a reversed copy

function stringReverse(string) {
    let splitString = string.split("");
    let reversedString = splitString.reverse();
    let joinedString = reversedString.join("");
    return joinedString;
  }

  stringReverse("Ayisha");

//   or

function reverse(word) {
    let reversedWord = "";
    for (let i = word.length - 1 ; i >=0; i--)
      reversedWord += word[i];
    return reversedWord;
  }
  
  reverse("Moment");

  




