function validAnagram(stringA, stringB) {

    function createCharMap(text) {
        let charMap = {}

        for (let char of text) {
            if (charMap.hasOwnProperty(char)) {
                charMap[char]++
            } else {
                charMap[char] = 1
            }
        }

        return charMap
    }

    if (stringA.length === stringB.length) {
        let stringAMap = createCharMap(stringA)
        let stringBMap = createCharMap(stringB)
        for (let char in stringAMap) {
            if (stringAMap[char] !== stringBMap[char]) {
                return false
            }
        }
        return true
    } else {
        return false
    }
}

// Second Type of way to solve for this


function validAnagram(first, second) {
    if (first.length !== second.length){
        return false;
    }
    const lookup = {};

    for (let i= 0; i <first.length; i++){
        let letter = firts[i];
        // if letter exists, incremenet, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for (let i =0; i <second.length; i++){
        let letter = second[i];
        // cant find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -=1;
        }
    }
    return true;
}