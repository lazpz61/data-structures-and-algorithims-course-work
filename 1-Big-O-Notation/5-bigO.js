// Intro to Big O

/* Is used to understand which code implementation is best for maximum efficiency.

way of generalizing code, and compare to other peices of code. 
 */

// Write a function that acceps a string input and returns a reversed copy

function wordReverse(word) {
    let splitWord = string.split("");
    let reversedWord = splitWord.reverse();
    let joinedWord = reversedWord.join("");
    return joinedWord;
  }

  wordReverse("Lazaro");

//   or

function reverse(word) {
    let reversedWord = "";
    for (let i = word.length - 1 ; i >=0; i--)
      reversedWord += word[i];
    return reversedWord;
  }
  
  reverse("Moment");

  




