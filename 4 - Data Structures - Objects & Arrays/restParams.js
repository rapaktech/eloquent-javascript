/* Function to calculate the maximum
of any number of arguments using rest paramters to pass the arguments */

function max(...numbers) {
    let result = -Infinity;
        for (let number of numbers) {
            if (number > result) result = number;
        }
    return result;
}

console.log(max(4, 1, 9, -2));
// → 9


/* You can use a similar three-dot notation to call a function with an array of
arguments. This “spreads” out the array into the function call,
passing its elements as separate arguments.*/

let numbers = [5, 1, 7];
console.log(max(...numbers));
// → 7


/* Square bracket array notation similarly allows the triple-dot operator to
spread another array into the new array. */

let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);
// → ["will", "never", "fully", "understand"]