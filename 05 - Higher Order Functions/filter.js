let SCRIPTS = require('./scripts');


// Filter method
function newFilter(array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}

console.log(newFilter(SCRIPTS, script => script.living));
// → [{name: "Adlam", …}, …]

console.log(SCRIPTS.filter(s => s.direction == "ttb"));
// → [{name: "Mongolian", …}, …]