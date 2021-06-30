/* Dominant writing direction
Write a function that computes the dominant writing direction in a string of
text.

Remember that each script object has a direction property that can be
"ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).

The dominant direction is the direction of a majority of the characters that
have a script associated with them.

The characterScript and countBy functions defined earlier in the chapter are probably useful here. */


let SCRIPTS = require('../scripts');

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let direction = groupName(item);
        let known = counts.findIndex(c => c.direction == direction);
        if (known == -1) {
            counts.push({direction, count: 1});
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
    })) {
            return script;
        }
    } return null;
}


function dwd(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    }).filter(({ direction }) => direction != 'none');

    let total = scripts.reduce((n, { count }) => n + count, 0);

    if (total == 0) return "No scripts found";
    return scripts.map(({ direction, count }) => {
        return `${ Math.round(count * 100 / total)}% ${ direction }`;
    }).join(", ");
}


console.log(dwd('uiugsduilgds英国的狗说"woof", 俄罗斯的狗说"тяв"'));