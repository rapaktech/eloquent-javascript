// Understanding the mutability nature of objects

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
// → true

console.log(object1 == object3);
// → false

object1.value = 15;

console.log(object2.value);
// → 15

console.log(object3.value);
// → 10


// Using the mutability nature to modify const variables that are pointing to an object
const score = {visitors: 0, home: 0};

score.visitors = 1;   // This is okay

console.log(score);

// score = {visitors: 1, home: 1}  // This isn't allowed

score.home = 1;   // This is allowed

console.log(score);