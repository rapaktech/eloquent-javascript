// Let’s go back to the phi function for a moment.

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
    (table[0] + table[1]) *
    (table[1] + table[3]) *
    (table[0] + table[2]));
}


/* One of the reasons this function is awkward to read is that we have a binding
76pointing at our array, but we’d much prefer to have bindings for the elements
of the array, that is, let n00 = table[0] and so on. Fortunately, there is a
succinct way to do this in JavaScript. */


function newPhi([n00, n01, n10, n11]) {
    return (n11 * n00 - n10 * n01) /
    Math.sqrt((n10 + n11) * (n00 + n01) *
    (n01 + n11) * (n00 + n10));
}



// A similar trick works for objects, using braces instead of square brackets.
let {id} = {name: "Faraji", age: 23};

console.log(id);
// → Faraji