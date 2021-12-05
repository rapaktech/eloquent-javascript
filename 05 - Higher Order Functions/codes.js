let SCRIPTS = require('./scripts');

function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
    })) {
            return script;
        }
    } return null;
}

console.log(characterScript(121));
// → {name: "Latin", …}

// Two emoji characters, horse and shoe
let horseShoe = "🐴👟";
console.log(horseShoe.length);
// → 4
console.log(horseShoe[0]);
// → (Invalid half-character)
console.log(horseShoe.charCodeAt(0));
// → 55357 (Code of the half-character)
console.log(horseShoe.codePointAt(0));
// → 128052 (Actual code for horse emoji)


let roseDragon = "🌹🐉";
for (let char of roseDragon) {
    console.log(char);
}
// → 🌹
// → 🐉