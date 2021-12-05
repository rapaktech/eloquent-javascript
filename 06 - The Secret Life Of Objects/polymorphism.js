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



Rabbit.prototype.toString = function() {
    return `a ${this.type} rabbit`;
};

console.log(String(blackRabbit));
// → a black rabbit

