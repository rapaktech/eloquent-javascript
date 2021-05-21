// Methods: "Properties" that contain functions.

let doh = "Doh";

console.log(typeof doh.toUpperCase);
// → function

console.log(doh.toUpperCase());
// → DOH


// Array methods
let sequence = [1, 2, 3];

sequence.push(4);
sequence.push(5);

console.log(sequence);
// → [1, 2, 3, 4, 5]

console.log(sequence.pop());
// → 5

console.log(sequence);
// → [1, 2, 3, 4]