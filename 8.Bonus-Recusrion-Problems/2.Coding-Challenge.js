/*
Write a Recursive function called isPalindrome which returns true if the string 
passed to it is a palindrome (reads the same forward and backward).
Otherwise it returns false.

*/

function isPalindrome(word){
    if(word.length === 1) return true;
    if(word.length === 2) return word[0] === word[1];
    if(word[0] === word.slice(-1)) return isPalindrome(word.slice(1,-1))
    return false;
}



