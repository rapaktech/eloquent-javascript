let empty = {};

console.log(empty.toString);
// → function toString()…{}

console.log(empty.toString());
// → [object Object]


console.log(Object.getPrototypeOf({}) == Object.prototype);
// → true

console.log(Object.getPrototypeOf(Object.prototype));
// → null

console.log(Object.getPrototypeOf({}));
// → {}

console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
// → true

console.log(Object.getPrototypeOf([]) == Array.prototype);
// → true

let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");
// → The killer rabbit says 'SKREEEE!'

module.exports = protoRabbit;