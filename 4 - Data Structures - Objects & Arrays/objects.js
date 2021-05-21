let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};

console.log(day1.squirrel);
// → false

console.log(day1.wolf);
// → undefined

day1.wolf = false;

console.log(day1.wolf);
// → false


let descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
};


let anObject = {left: 1, right: 2};

console.log(anObject.left);
// → 1

delete anObject.left;

console.log(anObject.left);
// → undefined

console.log("left" in anObject);
// → false

console.log("right" in anObject);
// → true


// Getting an array of an object's properties' names using 'Object.keys' method
console.log(Object.keys({x: 0, y: 0, z: 2}));
// → ["x", "y", "z"]



// Copying an object's properties into another object using 'Object.assign' method
let objectA = {a: 1, b: 2};

Object.assign(objectA, {b: 3, c: 4});

console.log(objectA);
// → {a: 1, b: 3, c: 4}



// Array of objects: Arrays as sequences of objects

let journal = [
    {events: ["work", "touched tree", "pizza",
    "running", "television"],
    squirrel: false},

    {events: ["work", "ice cream", "cauliflower",
    "lasagna", "touched tree", "brushed teeth"],
    squirrel: false},

    {events: ["weekend", "cycling", "break", "peanuts",
    "beer"],
    squirrel: true},

    /* and so on... */
];