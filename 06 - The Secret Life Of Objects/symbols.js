class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");



let sym = Symbol("name");
console.log(sym == Symbol("name"));
// → false

Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);
// → 55


const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function() {
    return `${this.length} cm of blue yarn`;
};

console.log([1, 2].toString());
// → 1,2

console.log([1, 2, 4][toStringSymbol]());
// → 3 cm of blue yarn


let stringObject = {
    [toStringSymbol]() { return "a jute rope"; }
};

console.log(stringObject[toStringSymbol]());
// → a jute rope