// Analysing control flow

let theNumber = 9;

console.log("Your number is the square root of " + theNumber * theNumber);



// Conditional Execution
let newNumber = 11;


// IF statement
if (!Number.isNaN(newNumber)) {
    console.log("Your number is the square root of " + newNumber * newNumber);
};


if (1 + 1 == 2) console.log("It's true");


// if-else
if (!Number.isNaN(newNumber)) {
    console.log("Your number is the square root of " + newNumber * newNumber);
} else {
    console.log("Hey. Why didn't you give me a number?");
}



// else-if chaining

let num = 7;
if (num < 10) {
    console.log("Small");
} else if (num < 100) {
    console.log("Medium");
} else {
    console.log("Large");
}