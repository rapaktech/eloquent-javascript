/* Retry
Say you have a function primitiveMultiply that in 20 percent of cases multiplies two numbers 
and in the other 80 percent of cases raises an exception of type MultiplicatorUnitFailure.

Write a function that wraps this clunky function and just keeps trying until a call succeeds, 
after which it returns the result.

Make sure you handle only the exceptions you are trying to handle. */



class MultiplicatorUnitFailure extends Error {};

function primitiveMultiply(arrayA, arrayB) {
    let choiceA = Math.floor(Math.random() * arrayA.length);
    let choiceB = Math.floor(Math.random() * arrayB.length);
    let a = arrayA[choiceA];
    let b = arrayB[choiceB];
    let result = a * b;
    if (Number.isNaN(result)) throw new MultiplicatorUnitFailure("Invalid input: " + a , " ", b);
    else return result;
}



function multiplier(arrayA, arrayB) {
    for (;;) {
        try {
            let result = primitiveMultiply(arrayA, arrayB);
            console.log("Your multiplication result is", result);
            break;
        } catch (e) {
            if (e instanceof MultiplicatorUnitFailure) {
            console.log("One or both input values is not a number, Please try again.");
        } else {
            throw e;
            }
        }
    }
}


multiplier([[1, 2, 3, 4, 5, "m", "o", "p", "q", "r"]], [1, 2, 3, 4, 5, "m", "o", "p", "q", "r"]);