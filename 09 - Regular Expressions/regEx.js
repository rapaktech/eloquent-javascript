let re1 = new RegExp("abc");
let re2 = /abc/;
let eighteenPlus = /eighteen\+/;



// Testing for matches

console.log(/abc/.test("abcde"));
// → true

console.log(/abc/.test("abxde"));
// → false