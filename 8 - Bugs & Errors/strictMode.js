// Using Strict Mode

function canYouSpotTheProblem() {
    // "use strict";
    for (counter = 0; counter < 10; counter++) {
    console.log("Happy happy");
    }
}

canYouSpotTheProblem();
// → ReferenceError: counter is not defined



function Person(name) {
    // "use strict";
    this.name = name; 
}

let ferdinand = Person("Ferdinand"); // oops
console.log(name);
// → Cannot set property 'name' of undefined