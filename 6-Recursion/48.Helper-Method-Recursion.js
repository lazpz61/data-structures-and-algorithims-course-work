/*
The Helper Method is a pattern where we have an outer function that is not recursive that calls an
an inner function that it recursive. 

*/

// This code is a patten, not actually code.
function outer(input){
    let outerscopeVariable = []

    function helper(helperInput){
        // Modify the outerScopedVariable
        helper(helperInput--)
    }
    helper(input)
    return outerScopedVariable;
}



function collectOddValues(arr){
    let result = []

    function helper(helperInput){
        if(helperInput.length === 0){
            return;
        }
        if (helperInput[0] % 2 !==0){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result; 
}

