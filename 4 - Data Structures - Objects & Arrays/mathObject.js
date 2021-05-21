// Usings methods of the math object

function randomPointOnCircle(radius) {
    let angle = Math.random() * 2 * Math.PI;
    return {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle)
    };
}

console.log(randomPointOnCircle(2));
// → {x: 0.3667, y: 1.966}



/* The Math.random is a function that returns a
new pseudorandom number between zero (inclusive) and one (exclusive) every
time you call it. */

console.log(Math.random());
// → 0.36993729369714856


/* If we want a whole random number instead of a fractional one, we can use
Math.floor (which rounds down to the nearest whole number) on the result of
Math.random. */

console.log(Math.floor(Math.random() * 10));
// → 2


/* There is also the function Math.ceil (for “ceiling”, which rounds up to
a whole number) */

console.log(Math.ceil(0.5));


/* Math.round (to the nearest whole number) */
console.log(Math.round(0.4));

/* Math.abs, which takes the absolute value of a number, meaning it 
negates negative values but leaves positive ones as they are. */
console.log(Math.abs(0.5));