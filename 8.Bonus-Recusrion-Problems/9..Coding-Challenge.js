/*

Write a function called collectString which accepts an object and returns an array of all the values in the
object that have a typeof string. 
*/



// Helper Recursion Method

function collectStrings(object) {
    let stringsArray = [];
 
    function gatherStrings(obj) {
        for(let item in obj) {
            if(typeof obj[item] === 'string') {
                stringsArray.push(obj[item]);
            }
            else if(typeof obj[item] === 'object') {
                return gatherStrings(obj[item]);
            }
        }
    }
 
    gatherStrings(obj);
 
    return stringsArray;
}



// Pure Recursion Method

function collectStrings(obj) {
    var stringsArr = [];
    for(var key in obj) {
        if(typeof obj[key] === 'string') {
            stringsArr.push(obj[key]);
        }
        else if(typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectStrings(obj[key]));
        }
    }
 
    return stringsArr;
}



