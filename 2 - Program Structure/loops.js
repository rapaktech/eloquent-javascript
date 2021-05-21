// While loops

let number = 0;

while (number <= 12) {
console.log(number);
number = number + 2;
}


let result = 1;
let counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}
console.log(result);
// → 1024



// do-while loops
let num = 0;
do {
    console.log(num);
    num++;
} while (num < 7);


console.log(num);



// for loops
for (let value = 0; value <= 12; value = value + 2) {
    console.log(number);
}


let output = 1;
// Program to calculate 2^10
for (let counter = 0; counter < 10; counter = counter + 1) {
    output = output * 2;
}
console.log(output);
// → 1024



// Breaking out of a loop

for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
        console.log(current);
        break;
    }
    // Loop outputs 21
}


// Continue
for (let current = 20; ; current = current + 1) {
    if (current % 7 == 1) {
        console.log(current);
        break;
    } else {
        continue;
    }
}


// Switch loop
switch ("sunny") {
    case "rainy":
        console.log("Remember to bring an umbrella.");
    break;
    case "sunny":
        console.log("Dress lightly.");
    case "cloudy":
        console.log("Go outside.");
    break;
    default:
        console.log("Unknown weather type!");
    break;
}