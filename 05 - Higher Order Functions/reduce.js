let SCRIPTS = require('./scripts');

function newReduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}

console.log(newReduce([1, 2, 3, 4], (a, b) => a + b, 0));
// → 10

console.log([1, 2, 3, 4].reduce((a, b) => a + b));
// → 10


function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0);
}


console.log(SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
}));
// → {name: "Han", …}

module.exports = characterCount;