const protoRabbit = require('./prototypes');

// Constructor functions
function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}

function Rabbit(type) {
    this.type = type;
}

Rabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("weird");
console.log(weirdRabbit);

console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
// → true

console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype);
// → true

Rabbit.prototype.speak('I am tired');

weirdRabbit.speak('I love rice!');