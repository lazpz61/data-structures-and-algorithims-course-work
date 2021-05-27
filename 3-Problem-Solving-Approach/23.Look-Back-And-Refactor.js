/* Look Back and Refactoring

- Can I check the result
- Can you derive the result differently
-Can you understand it at a glance
-Can you use the result or method for some other problem?
-Can you imporve the performance of your solution?
-Can you think of other ways to refactor?
-How have other people solved this problem? 


At the end pick the interviewers brain, how have others solved this. Could I have made this code better.


*/


function charCount(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++ ){
      let char = str[i].toLowerCase();
      if(/[a-z0-9]/.test(char)) {
          if (obj[char] > 0) {
            obj[char]++;
          } else {
          obj[char] = 1;
        };
      }
    }
    return obj;
}

charCount("Diamond Hands");



function charCount(str) {
    let obj = {};
    for (let char of str) {
      char = char.toLowerCase();
      if(/[a-z0-9]/.test(char)) {
          if (obj[char] > 0) {
            obj[char]++;
          } else {
          obj[char] = 1;
        };
      }
    }
    return obj;
}

or 


function charCount(str) {
    let obj = {};
    for (let char of str) {
      if(isAlphaNumeric(char)) {
        char = char.toLowerCase();
        obj[char] = ++obj[char] || 1;
      }
    }
    return obj;
}


/* It's good to say out loud if you think there could be a better way to do this,
    and try to refactor your code line by line to see if you can do something more efficiently with less code. 

*/

function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);
      if (!(code > 47 && code < 58) && // numeric (0-9)
          !(code > 64 && code < 91) && // upper alpha (A-Z)
          !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
      }
    return true;
  }



