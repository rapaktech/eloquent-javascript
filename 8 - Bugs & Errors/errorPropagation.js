function promptNumber(question) {
    let result = Number(question);
    if (Number.isNaN(result)) return null;
    else return result;
}

console.log(promptNumber("How many trees do you see?"));


function lastElement(array) {
    if (array.length == 0) {
        return {failed: true};
    } else {
        return {element: array[array.length - 1]};
    }
}