// Unorder, key value pairs!

let instructor = {
    firstName: "Lazaro",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4]
}

//  firstName --  isInstructor -- favoriteNumbers

/*
The Big O of Objects

Insertion -  O(1)
Removal - O(1)
Searching - O(n)
Access - O(1)

Object.keys - O(n)
Object.values - O(n)
Object.entries - O(n)
hasOwnPropety - O(1)
*/

Object.values(instructor); - result  -  [ 'Lazaro', true, [ 1, 2, 3, 4 ] ]

Object.keys(instructor); -  result [ 'firstName', 'isInstructor', 'favoriteNumbers' ]

Object.entries(instructor); - result

[
    [ 'firstName', 'Lazaro' ],
    [ 'isInstructor', true ],
    [ 'favoriteNumbers', [ 1, 2, 3, 4 ] ]
  ]

instructor.hasOwnProperty("firstName"); - True