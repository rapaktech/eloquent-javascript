// Function to call console.log, 'n' number of times
function repeatLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

repeatLog(2);   // Prints 0, 1


// Function to perform an action, 'n' number of times
function repeat (n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
    return;
}

repeat(3, console.log); // Prints 0, 1, 2


let labels = [];

repeat(5, i => {
    labels.push(`Unit ${i + 1}`);
});

console.log(labels);
// → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]

module.exports = repeat;