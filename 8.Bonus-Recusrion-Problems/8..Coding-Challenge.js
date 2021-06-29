/*

Write a function called stringifyNumbers which takes in an object and finds all the values which are numbers
converts them to strings.
*/


function stringifyNumbers(object) {
  var newObject = {};
  for (let item in object) {
    if (typeof object[item] === 'number') {
      newObject[item] = object[item].toString();
    } else if (typeof object[item] === 'object' && !Array.isArray(object[item])) {
      newObject[item] = stringifyNumbers(object[item]);
    } else {
      newObject[item] = object[item];
    }
  }
  return newObject;
}
  