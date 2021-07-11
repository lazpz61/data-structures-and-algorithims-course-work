// Helper Methods 

function getDigit(number, index) {
    return Math.floor(Math.abs(number) / Math.pow(10,index)) % 10;
}
function digitCount(number) {
    if (number === 0) return 1;
    return Math.floor(Math.log10(Math.abs(number)))+1;
}
function mostDigits(numbers){
    let maximumDigits = 0;
    for (let iteratedNum = 0; iteratedNum < numbers.length; iteratedNum++){
        maximumDigits = Math.max(maximumDigits, digitCount(numbers[iteratedNum]));
    }
    return maximumDigits;
}
function radixSort(numbers){
    let maxDigitCount = mostDigits(numbers);
    for (let iteratedIndex =0; iteratedIndex < maxDigitCount; iteratedIndex++){
        let digitBuckets = Array.from({length: 10},  () => []);
        for (let value = 0; value < numbers.length; value++){
            let digit = getDigit(numbers[value], iteratedIndex)
            digitBuckets[digit].push(numbers[value]);
        }
        numbers = [].concat(...digitBuckets);
    }
    return numbers;
}

radixSort([23,345,5467,12,2345,9852])