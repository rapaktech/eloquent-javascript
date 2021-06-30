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

killerRabbit.speak("I want to kill someone!");
blackRabbit.speak("I love my skin!");


let object = new class { getWord() { return "Hello!"; } };
console.log(object.getWord());
// → Hello!

module.exports = Rabbit, killerRabbit, blackRabbit;