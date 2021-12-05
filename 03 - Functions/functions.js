// Defining a function

const square = function (x) {
    return x * x;
};

console.log(square(12));



// Functions without parameters

const makeNoise = function () {
    console.log("Bling!");
};

makeNoise();



// Function with two parameters
const power = function (base, exponent) {
    let result = 1;
    for (let index = 0; index < exponent; index++) {
        result *= base;
    }
    return result;
};


console.log(power(2, 10));