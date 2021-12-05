let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;

console.log(animalCount.test("the 3 pigs"));
// → true

console.log(animalCount.test("15 pigchickens"));
// → false