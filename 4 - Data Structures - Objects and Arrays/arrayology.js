let todoList = [];

function remember(task) {
    todoList.push(task);
}

function getTask() {
    return todoList.shift(); // Shift method removes a entry from the front of the array
}

function rememberUrgently(task) {
    todoList.unshift(task);  // Unshift method adds a entry to the front of the array
}


/* To search for a specific value, arrays provide an indexOf method. The method
searches through the array from the start to the end and returns the index at
which the requested value was found—or -1 if it wasn’t found. To search from
the end instead of the start, there’s a similar method called lastIndexOf. */

console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3


/* Both indexOf and lastIndexOf take an optional second argument that indicates where to start searching. */
console.log([1, 2, 3, 2, 1].indexOf(2, 2));
// → 3
console.log([1, 2, 3, 2, 1].lastIndexOf(2, 2));
// → 1


/* Another fundamental array method is slice,
which takes start and end indices and returns an array
that has only the elements between them. The start
index is inclusive, the end index exclusive. */

console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]

/* When the end index is not given, slice will take all of the elements after the
start index. You can also omit the start index to copy the entire array */

console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]
console.log([0, 1, 2, 3, 4].slice());
// → [0, 1, 2, 3, 4]


/* The concat method can be used to glue arrays together to create a new array,
similar to what the + operator does for strings. */

function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index + 1));
}

console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]


/* If you pass concat an argument that is not an array, that value will be added
to the new array as if it were a one-element array. */

function concat(array, arg) {
    return array.concat(arg);
}

console.log(concat(["a", "b", "c", "d", "e"], 2));