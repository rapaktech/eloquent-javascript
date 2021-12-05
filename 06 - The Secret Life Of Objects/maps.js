let ages = {
    Boris: 39,
    Liang: 22,
    Júlia: 62
};

console.log(`Júlia is ${ages["Júlia"]}`);
// → Júlia is 62

console.log("Is Jack's age known?", "Jack" in ages);
// → Is Jack's age known? false

console.log("Is toString's age known?", "toString" in ages);
// → Is toString's age known? true

console.log("toString" in Object.create(null));
// → false

let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);

console.log(`Júlia is ${ages.get("Júlia")}`);
// → Júlia is 62

console.log("Is Jack's age known?", ages.has("Jack"));
// → Is Jack's age known? false

console.log("Is Jack's age known?", ages.has("toString"));
// → "Is toString's age known?", false

console.log({x: 1}.hasOwnProperty("x"));
// → true

console.log({x: 1}.hasOwnProperty("toString"));
// → false