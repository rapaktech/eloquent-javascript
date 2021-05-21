/* Minimum
The previous chapter introduced the standard function Math.min that returns its smallest argument.
We can build something like that now. Write a function
min that takes two arguments and returns their minimum. */


function min(a, b) {
    if (Number(a) < Number(b)) return Number(a);
    else if (Number(b) < Number(a)) return Number(b);
    else return "Numbers are equal.";
}

console.log(min(7, 1000));
console.log(min(100, 1));
console.log(min(7, 7));