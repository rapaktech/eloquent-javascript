/* Your own loop
Write a higher-order function loop that provides something like a for loop
statement. It takes a value, a test function, an update function, and a body
function.

Each iteration, it first runs the test function on the current loop value
and stops if that returns false. Then it calls the body function, giving it the
current value.

Finally, it calls the update function to create a new value and
starts from the beginning.

When defining the function, you can use a regular loop to do the actual
looping. */

function loop(value, test, update, body) {
    let total = value;
    let newValue = value;
    for (let index = 0; ;index++) {
        if (test(newValue)) {
            newValue = update(newValue, value);
            total = body(total, newValue);
        } else {
            return total;
        }
    }
}


let value = 1;

console.log(loop(value, n => n < 2, (c, n) => c + n, (c, n) => c + n));