// Overriding derived properties

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


Rabbit.prototype.teeth = "small";

console.log(killerRabbit.teeth);
// → small

killerRabbit.teeth = "long, sharp, and bloody";

console.log(killerRabbit.teeth);
// → long, sharp, and bloody

console.log(blackRabbit.teeth);
// → small

console.log(Rabbit.prototype.teeth);
// → small

console.log(Array.prototype.toString == Object.prototype.toString);
// → false

console.log([1, 2].toString());
// → 1,2

console.log([1, 2].join(", "));
// → 1, 2

console.log(Object.prototype.toString.call([1, 2]));
// → [object Array]