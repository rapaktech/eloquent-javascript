// Understanding the call stack

function greet(who) {
    console.log("Hello " + who);
}

greet("Harry");
console.log("Bye");


// Blowing the call stack
function chicken() {
    return egg();
}
function egg() {
    return chicken();
}
console.log(egg() + " came first.");