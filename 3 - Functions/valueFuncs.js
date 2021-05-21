// Declaration notation
function square(x) {
    return x * x;
}

console.log(square(12));



console.log("The future says:", future());

function future() {
    return "You'll never have flying cars.";
}


// Arrow functions
const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};



// Different ways of declaring arrow functions
const square1 = (x) => { return x * x; };
const square2 = x => x * x;

const horn = () => {
    console.log("Toot");
};


console.log(power(3, 3));
console.log(square1(5));
console.log(square2(6));
horn();