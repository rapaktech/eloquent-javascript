/* Reversing an array
Arrays have a reverse method that changes the array by inverting the order in
which its elements appear. 

For this exercise, write two functions, reverseArray
and reverseArrayInPlace. 

The first, reverseArray, takes an array as argument
and produces a new array that has the same elements in the inverse order. 

The second, reverseArrayInPlace, does what the reverse method does: it modifies
the array given as argument by reversing its elements. 

Neither may use the standard reverse method. */


function reverseArray(array) {
    let newArray = [];
    for (let item of array) {
        newArray.unshift(item);
    }
    return newArray;
}

console.log(reverseArray([1, 2, 3, 4, 5]));


function reverseArrayInPlace(array) {
    let hold = 0;
    let reduce = array.length - 1;
    for (let index = 0; index < reduce; index++) {
        hold = array[reduce];
        array[reduce] = array[index]; 
        array[index] = hold;
        reduce--;
    }
    return array;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8, 9]));