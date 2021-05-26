/* Solve/Simplify 


Solve the Problem if you can, but if you cant solve a simpler problem. 

- write the code that you do know how to do, because you'd rather do what you know and anot get stuck on one 
part of the interveiw exam. 

in simplifying the problem, you can gain insight into th eharder part of the problem.

if you know a place to start go for it. 

Simplify 

1) find the core difficutlty.
2) Temporarily ignore that difficulty
3) write a simplified solution. ( at this step you'll gain insight into the answer)
4) then incorporate that difficulty back in. 

Start with the main logic, and then. Say something where if you had access to google then you should

In an interview if we can get 90 percent of the way to the end, its always best to start asking for guidelines
as to piece together the hard finished pieces. 

*/


function charCount(str) {
    // make object to return at end
      let result = {};
    // loop over string, for each character...
      for (let i =0; i < str.length; i++ ){
        let char = str[i].toLowerCase();
        // if the char is a number/letter AND key in object, add 1 to count
        if(result[char] > 0) {
            result[char]++;
        } 
        // if character is a number/letter AND not in object, add it and set value to 1
        else {
            result[char] = 1;
        };
      }
    
    // if character is something else( sace, period, etc) dont do anything 
    return result; 
    // return object at end
    }
    
    charCount("YeLlow");

