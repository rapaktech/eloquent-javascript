// AND Operator
console.log(true && false);

console.log(true && true);


// OR Operator
console.log(false || true)

console.log(false || false)


// NOT operator
console.log(!true);

console.log(!false);



// Ternary operator
console.log(true ? 1 : 2);  // returns 1

console.log(false ? 1 : 2);  // returns 2



// Short-circuiting of logical operators

console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes

console.log(null && "user")
// → null
console.log("Agnes" && "user")
// → user