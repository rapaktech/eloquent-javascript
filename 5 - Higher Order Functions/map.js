let SCRIPTS = require('./scripts');

function newMap(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}

let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
console.log(newMap(rtlScripts, s => s.name));
// → ["Adlam", "Arabic", "Imperial Aramaic", …]